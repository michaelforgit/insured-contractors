import React from 'react';
import clientPromise from '../../lib/mongodb'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
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

type contractorInformation = {
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

export default async function Create() {
  const testDoc = {
    id: "99000909090",
    company: "BM Toe Truck",
    locationId: "1234567890",
    email: "blahblah@gmail.com",
    phoneNumber: "1234567890",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    insuranceName: "Geico",
    insurancePhone: "1234567890",
    insuranceEmail: "support@geico.com",
  };


 try {
    const client = await clientPromise;
    const db = await client.db("insured-contractors");
  } catch (error) {
    console.log(error)
  }
  //dummy data


  return (
    <div className="grid justify-center  text-black truncate bg-white p-4" >
      <div color="gray" className="mt-6 font-normal text-3xl mb-px[10px] py-6">
        Contractor Registration
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6 pt-6 text-black truncate">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Company" type="text"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locationId">
              Location ID
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="locationId" type="text"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"/>
          </div>
          <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
            Zip Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insuranceName">
            Insurance Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insuranceName"
            type="text"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insurancePhone">
            Insurance Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insurancePhone"
            type="text"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insuranceEmail">
            Insurance Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insuranceEmail"
            type="text"
          />
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
        
        <button 
          className="w-full mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        > Submit </button>
        
      </form>
    </div>
  );
}