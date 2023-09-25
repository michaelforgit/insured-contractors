import { NextResponse } from 'next/server'
import clientPromise from "../../lib/mongodb";

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("insured-contractors");
    const requestData = await request.json();
    console.log(requestData)
    const { company, locationId, email, phoneNumber, city, state, zip, insuranceName, insurancePhone, insuranceEmail, jobs } = requestData;

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
        insuranceEmail,
        jobs
      }
    );
    return NextResponse.json( { message: 'SUCCESS!!!' } )
  } catch (error) {
    console.log(error)
    return NextResponse.json( { message: "Error..." } )
  }
}

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = await client.db("insured-contractors");
    const contractorsReq = await db.collection('contractors').find({}).toArray();
    
    let contractors = contractorsReq.map( (contractor) => ( {
      id: contractor._id.toString(),
      company: contractor.company,
      locationId: contractor.locationId,
      email: contractor.email,
      phoneNumber: contractor.phoneNumber,
      city: contractor.city,  
      state: contractor.state,
      zip: contractor.zip, 
      insuranceName: contractor.insuranceName,
      insurancePhone: contractor.insurancePhone,
      insuranceEmail: contractor.insuranceEmail,
      jobs: contractor.jobs,
      imageUrl: contractor.imageUrl
    } ) )

    return NextResponse.json({ contractors: contractors });
  } catch (error) {
    console.log(error)
  }
}