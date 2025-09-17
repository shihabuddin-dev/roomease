import { NextResponse } from "next/server";
import { dbConnect, collectionNameObj } from "../../../../lib/mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("userEmail");
  if (!userEmail) {
    return NextResponse.json({ success: false, error: "Missing userEmail" }, { status: 400 });
  }
  const collection = await dbConnect(collectionNameObj.bookingsCollection);
  const bookings = await collection.find({ userEmail }).toArray();
  return NextResponse.json({ success: true, bookings });
}
