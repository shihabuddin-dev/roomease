
import { NextResponse } from "next/server";
// import { dbConnect } from "@/lib/mongodb";
import { collectionNameObj, dbConnect } from "../../../../lib/mongodb";

export async function POST(req) {
    try {
        const data = await req.json();
        const collection = await dbConnect(collectionNameObj.propertiesCollection);
        const result = await collection.insertOne(data);
        return NextResponse.json({ success: true, insertedId: result.insertedId });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
