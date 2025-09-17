import { NextResponse } from "next/server";
import { dbConnect, collectionNameObj } from "../../../../lib/mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const propertyId = searchParams.get("propertyId");
  const userEmail = searchParams.get("userEmail");
  if (!propertyId || !userEmail) {
    return NextResponse.json({ booked: false });
  }
  const collection = await dbConnect(collectionNameObj.bookingsCollection);
  const booking = await collection.findOne({ propertyId, userEmail });
  return NextResponse.json({ booked: !!booking });
}
