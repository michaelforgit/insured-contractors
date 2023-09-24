import { NextResponse } from 'next/server'
import clientPromise from "../lib/mongodb";

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("insured-contractors");
    const requestData = await request.json();
    const { company, locationId, email, phoneNumber, city, state, zip, insuranceName, insurancePhone, insuranceEmail } = requestData;

    const post = await db.collection("contractors").insertOne(
      {
        company,
        locationId,
        email,
        phoneNumber,
        city,
        state,
        zip,
        insuranceName,
        insurancePhone,
        insuranceEmail
      }
    );
    return NextResponse.json( { message: 'SUCCESS!!!' } )
  } catch (error) {
    console.log(error)
    return NextResponse.json( { message: "Error..." } )
  }
}