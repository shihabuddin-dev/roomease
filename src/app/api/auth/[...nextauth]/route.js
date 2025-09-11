import clientPromise from "@/lib/mongodb";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { collectionNameObj } from "../../../../../lib/mongodb";
// import clientPromise, { collectionNameObj } from "@/lib/mongodb";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const users = db.collection(collectionNameObj.userCollection);
        // Upsert user info
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
        return true;
      } catch (e) {
        console.error("Error saving user to DB", e);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
