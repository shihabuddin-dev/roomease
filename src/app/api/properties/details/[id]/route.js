import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid property id" }, { status: 400 });
    }
    const property = await db.collection("properties").findOne({ _id: new ObjectId(id) });
    if (!property) {
      return NextResponse.json({ success: false, error: "Property not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, property });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
