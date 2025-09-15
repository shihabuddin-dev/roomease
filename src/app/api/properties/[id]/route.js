import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { collectionNameObj, dbConnect } from "../../../../../lib/mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid property id" }, { status: 400 });
    }

    const collection = await dbConnect(collectionNameObj.propertiesCollection);
    const property = await collection.findOne({ _id: new ObjectId(id) });

    if (!property) {
      return NextResponse.json({ success: false, error: "Property not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, property });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}