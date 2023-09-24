import Image from 'next/image'
import Card from './components/card'
import clientPromise from './lib/mongodb'

type contractorInformation = {
  id: string;
  company: string;
  locationId: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  zip: string;
  insuranceName: string;
  insurancePhone: string;
  insuranceEmail: string;
}

export default async function Home() {
  
  let contractors: contractorInformation[] = []

  try {
    const client = await clientPromise;
    const db = await client.db("insured-contractors");
    const contractorsReq = await db.collection('contractors').find({}).toArray();
    contractors = contractorsReq.map( (contractor) => ( {
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
      insuranceEmail: contractor.insuranceEmail
    } ) )
  } catch (error) {
    console.log(error)
  }

  return (
    <main className="flex min-h-screen p-8 lg:px-48 bg-[#f2f2f7]">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4">
          { contractors.map( (contractor) => (
            <Card key = {contractor.id} id = {contractor.id} company = {contractor.company} locationId = {contractor.locationId} email = {contractor.email} phoneNumber = {contractor.phoneNumber} city = {contractor.city} state = {contractor.state} zip = {contractor.zip} insuranceName = {contractor.insuranceName} insurancePhone = {contractor.insurancePhone} insuranceEmail = {contractor.insuranceEmail}  />
          ) ) }
        </div>
      </div>
    </main>
  )
}
