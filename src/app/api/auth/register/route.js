import clientPromise from "@/lib/mongodb";
import { collectionNameObj } from "../../../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const users = db.collection(collectionNameObj.userCollection);
    const existing = await users.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ message: "Email already registered." }), { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await users.insertOne({
      name,
      email,
      password: hashedPassword,
      provider: "credentials",
      createdAt: new Date(),
      lastLogin: null,
      image: null,
    });
    return new Response(JSON.stringify({ message: "Registration successful." }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message || "Registration failed." }), { status: 500 });
  }
}
