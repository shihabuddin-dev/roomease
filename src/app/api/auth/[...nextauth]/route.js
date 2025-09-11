import clientPromise from "@/lib/mongodb";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { collectionNameObj } from "../../../../../lib/mongodb";
import bcrypt from "bcryptjs";
// import clientPromise, { collectionNameObj } from "@/lib/mongodb";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const users = db.collection(collectionNameObj.userCollection);
        const user = await users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email");
        }
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image || null,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      try {
        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const users = db.collection(collectionNameObj.userCollection);
        // Only upsert for OAuth (not credentials login)
        if (account?.provider !== "credentials") {
          await users.updateOne(
            { email: user.email },
            {
              $set: {
                name: user.name,
                email: user.email,
                image: user.image,
                provider: account?.provider || null,
                lastLogin: new Date(),
              },
              $setOnInsert: {
                createdAt: new Date(),
              },
            },
            { upsert: true }
          );
        }
        return true;
      } catch (e) {
        console.error("Error saving user to DB", e);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
