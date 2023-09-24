"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

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

export default function Create() {

  const [companyValue, setCompanyValue] = useState("Default");
  const [locationIdValue, setLocationIdValue] = useState("Default");
  const [emailValue, setEmailValue] = useState("Default");
  const [phoneNumberValue, setPhoneNumberValue] = useState("Default");
  const [cityValue, setCityValue] = useState("Default");
  const [stateValue, setStateValue] = useState("Default");
  const [zipValue, setZipValue] = useState("Default");
  const [insuranceNameValue, setInsuranceNameValue] = useState("Default");
  const [insurancePhoneValue, setInsurancePhoneValue] = useState("Default");
  const [insuranceEmailValue, setInsuranceEmailValue] = useState("Default");

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      company: companyValue,
      locationId: locationIdValue,
      email: emailValue,
      phoneNumber: phoneNumberValue,
      city: cityValue,
      state: stateValue,
      zip: zipValue,
      insuranceName: insuranceNameValue,
      insurancePhone: insurancePhoneValue,
      insuranceEmail: insuranceEmailValue,
    };

    const response = fetch('api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    console.log("should be redirecting...")
    router.push('/')
  };

  return (
    <div className="grid justify-center text-black truncate p-4 mb-8" >
      <div color="gray" className="mt-6 font-normal text-3xl">
        Contractor Registration
      </div>
      <form className="w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-6 pt-6 text-black truncate">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Company" type="text" onChange={(e) => setCompanyValue(e.target.value)}/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locationId">
              Location ID
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="locationId" type="text" onChange={(e) => setLocationIdValue(e.target.value)}/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" onChange={(e) => setEmailValue(e.target.value)}/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="text" onChange={(e) => setPhoneNumberValue(e.target.value)}/>
          </div>
          <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" onChange={(e) => setCityValue(e.target.value)}/>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state" type="text" onChange={(e) => setStateValue(e.target.value)}
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
            onChange={(e) => setZipValue(e.target.value)}
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
            onChange={(e) => setInsuranceNameValue(e.target.value)}
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
            onChange={(e) => setInsurancePhoneValue(e.target.value)}
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
            onChange={(e) => setInsuranceEmailValue(e.target.value)}
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
        <div className="justify-between">
          <button className="w-150 mt-8 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-red-500" value="Cancel">Back</button>
          <button className="w-120 mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" value="Submit">Submit </button>
        </div>


        
      </form>
    </div>
  );
}