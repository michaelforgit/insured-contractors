import React from 'react';
import clientPromise from '../../lib/mongodb'

const contractorServices = [
  "Plumbing",
  "Electrical",
  "Roofing",
  "Carpentry",
  "Painting",
  "Landscaping",
  "Concrete",
  "Fencing",
  "Flooring",
  "Tiling",
  "Drywall",
  "Masonry",
  "Paving",
  "Siding",
  "Insulation",
  "Welding",
  "Guttering",
  "Demolition",
  "Cabinetry",
  "Framing",
  "Wiring",
  "PestControl",
  "Decking",
  "Remodeling",
  "Hauling",
  "HVAC",
  "Plastering",
  "Restoration",
  "Excavation",
  "Irrigation",
  "Septic",
  "Asphalt",
  "Sealing",
  "Grading",
  "Renovation",
  "Epoxy",
  "Locksmith",
  "Furnace",
  "Stucco",
  "Sculpting",
  "Glasswork",
  "Ventilation",
  "Chimney",
  "Fertilization",
  "Scaffolding",
  "Pergolas",
  "Illumination",
  "Foundations",
  "Drainage",
  "Irrigation",
  "Caulking",
  "Balconies",
  "Moldings",
  "Pavement",
  "Walls",
  "Sewer",
  "Landfills",
  "Cesspools",
  "Demolition",
  "Woodwork",
  "Ponds",
  "Shingles",
  "Excavation",
  "Faucets",
  "Patios",
  "Insulation",
  "Wiring",
  "Countertops",
  "Locks",
  "Fences",
  "Sinks",
  "Cabinets",
  "Lighting",
  "Venting",
  "Mowing",
  "Pools",
  "Showers",
  "Refrigeration",
  "Pumps",
  "Sculpture",
  "Balcony",
  "Plumbing",
  "Appliances",
  "Chimneys",
  "Brickwork",
  "Stairs",
  "Vent",
  "Demolish",
  "Clearing",
  "Fireplace",
  "Ceilings",
  "Piercing",
  "Excavate",
  "Backhoe",
  "Ducting",
  "Dredge",
  "Gardening",
  "Excavator",
  "Irrigate",
  "Inspect",
  "Driveway",
  "Tiling",
  "Repoint",
  "Staircase",
  "Sculptor",
  "Polish",
  "Engrave",
  "Build",
  "Seepage",
  "Install",
  "Sawing",
  "Reshape",
  "Tile",
];

export default async function Create() {

  try {
    const client = await clientPromise;
    const db = await client.db("insured-contractors");
    const contractorsReq = await db.collection('contractors').find({}).toArray();
    console.log(contractorsReq);
  } catch (error) {
    console.log(error)
  }

  return (
    <div className="grid justify-center  text-black truncate bg-white p-4" >
      <div color="gray" className="mt-6 font-normal text-3xl mb-px[10px] py-6">
        Contractor Registration
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6 pt-6 text-black truncate">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="test">
              Test
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>
        </div>
        
        <div className="w-full">
          <label className="inline-block text-sm text-gray-600" htmlFor="Multiselect">
            Which Services do you provide?
          </label>
          <div className="add tailwind css">
            <select
              id="select-service"
              name="service[]"
              multiple
              placeholder="Select Service..."
              autoComplete="off"
              className="block w-full rounded-sm cursor-pointer focus:outline-none"
              style={{ padding: "0.375rem 0.75rem", minHeight: "3rem" }}
            >
              {contractorServices.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>

        
      </form>
    </div>
  );
}