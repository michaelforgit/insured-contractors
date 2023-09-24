'use client'
import React, { useState, useEffect} from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ObjectId } from 'mongodb';

type ContractorInformation = {
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
};

export default function Edit() {
  const [idValue, setIdValue] = useState(" ");
  const [companyValue, setCompanyValue] = useState(" ");
  const [locationIdValue, setLocationIdValue] = useState(" ");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [zipValue, setZipValue] = useState("");
  const [insuranceNameValue, setInsuranceNameValue] = useState("");
  const [insurancePhoneValue, setInsurancePhoneValue] = useState("");
  const [insuranceEmailValue, setInsuranceEmailValue] = useState("");

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch data from API and update the state
      fetch(`../api/${id}`)
        .then((res) => res.json())
        .then((responseData) => {
          if (responseData === null) {
            router.push('/');
          } else {
            const { contractor } = responseData;
            setIdValue(contractor._id);
            setCompanyValue(contractor.company);
            setLocationIdValue(contractor.locationId);
            setEmailValue(contractor.email);
            setPhoneNumberValue(contractor.phoneNumber);
            setCityValue(contractor.city);
            setStateValue(contractor.state);
            setZipValue(contractor.zip);
            setInsuranceNameValue(contractor.insuranceName);
            setInsurancePhoneValue(contractor.insurancePhone);
            setInsuranceEmailValue(contractor.insuranceEmail);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  //update the mongodb database using the put request
  useEffect(() => {
    if (id) {
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

      const response = fetch(`../api/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    }
  }, [companyValue, locationIdValue, emailValue, phoneNumberValue, cityValue, stateValue, zipValue, insuranceNameValue, insurancePhoneValue, insuranceEmailValue]);


  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      _id: idValue,
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

    const response = fetch(`contractors/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const client = fetch(`contractors/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    router.push('/');
  };

  return (
    <div className="grid justify-center text-black truncate bg-white p-4">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-6 pt-6 text-black truncate">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Company"
              type="text"
              placeholder="Company"
              value = {companyValue}
              onChange={(e) => setCompanyValue(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
              value={emailValue}
              />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              placeholder="phoneNumber"
              value={phoneNumberValue}
              onChange={(e) => setPhoneNumberValue(e.target.value)}
            />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city"> City </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="city"
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state"> State </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            placeholder="state"
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip"> Zip Code </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip" 
            type="text"
            placeholder="zip"
            value={zipValue}
            onChange={(e) => setZipValue(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insuranceName"> Insurance Name </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insuranceName"
            type="text"
            placeholder="insuranceName"
            value={insuranceNameValue}
            onChange={(e) => setInsuranceNameValue(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insurancePhone"> Insurance Phone Number </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insurancePhone"
            type="text" 
            placeholder="insurancePhone"
            value={insurancePhoneValue}
            onChange={(e) => setInsurancePhoneValue(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insuranceEmail"> Insurance Email </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insuranceEmail"
            type="text"
            placeholder="insuranceEmail"
            value={insuranceEmailValue}
            onChange={(e) => setInsuranceEmailValue(e.target.value)}
          />
        </div>
       </div> 
        <button className="w-full mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Update
        </button>
      </form>
    </div>
  );
}
