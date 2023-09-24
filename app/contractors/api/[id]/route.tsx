import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import clientPromise from "../../../lib/mongodb";

export async function GET(request: Request, context: { params: any }) {
  try {
    const { id } = context.params;
    console.log(id);
    const client = await clientPromise;
    const db = client.db("insured-contractors");
    const contractor = await db.collection("contractors").findOne({ _id: new ObjectId(id) });
    return NextResponse.json({ contractor: contractor });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error..." });
  }
}

export async function PUT(request: Request, context: { params: any }) {
  try {
    const { id } = context.params;
    console.log("hello");
    const client = await clientPromise;
    const db = client.db("insured-contractors");
    const requestBody = await request.json(); // Parse request body as JSON
    const contractor = await db.collection("contractors").updateOne({ _id: new ObjectId(id) }, { $set: requestBody });
    return NextResponse.json("hello");

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error..." });
  }
}

