'use client';
import React from 'react';
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

const App = () => {
  return (
    <div className="grid justify-center  text-black truncate bg-white p-4" >
      <div color="gray" className="mt-6 font-normal text-3xl mb-px[10px] py-6">
        Contractor Registration
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6 pt-6 text-black truncate">
          <Input size="lg" label="Company Name" crossOrigin="anonymous " className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>     
          <Input size="lg" label="Company Email" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
          <Input size="lg" label="Company Phone" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
          <Input size="lg" label="Location ID" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' />
          <Input size="lg" label="City" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
          <Input size="lg" label="State" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
          <Input size="lg" label="Zipcode" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
          <Input size="lg" label="Insurance Name" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
          <Input size="lg" label="Insurance Email" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
          <Input size="lg" label="Insurance Phone" crossOrigin="anonymous" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
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
                <option value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>

        <Button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
