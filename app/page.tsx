'use client';

import Image from 'next/image'
import Card from './components/card'
import { FaPlusSquare } from 'react-icons/fa'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

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
  jobs: string[];
  imageUrl: string;
}

import { useEffect, useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
  const { replace } = useRouter();
  const [contractors, setContractors] = useState<contractorInformation[]>([]);

  function handleSearch(event: any) {
    event.preventDefault();
    const searchInput = document.getElementById('default-search') as HTMLInputElement;
    const searchValue = searchInput ? searchInput.value : '';
    if (searchValue) {
      params.set('filter', searchValue)
    } else {
      params.delete('filter')
    }
    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    const filter = params.get('filter') ? `?filter=${params.get('filter')}` : '';
    fetch(`/contractors/api${filter}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-cache',
    }).then(async (data) => {
      const result = await data.json();
      setContractors(result.contractors);
    }).catch((error) => {
      console.log(error);
      setContractors([]);
    });
  }, [params, pathname]);

  return (
    <main className="flex min-h-screen bg-[#f2f2f7] justify-center">
      <div className="w-full justify-center p-8 lg:px-48 mb-20 max-w-[1800px]">
      <div className="grid grid-cols-2 justify-items-center">
        <img src="InsuredContractors.png" className="col-span-2 lg:top-5 lg:left-5 lg:absolute h-16"/>
        <form className="col-span-2 mx-auto grid mb-6 mt-6 lg:mt-0 w-full md:w-3/5" onSubmit={handleSearch}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for contractors..."/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
        <div>
          <a href="contractors/create">
            <button  className="fixed right-5 bottom-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 z-50"><div className="flex flex-row gap-2 items-center"><p className="lg:text-lg">Post</p><FaPlusSquare className="w-5 h-5"/></div></button>
          </a>
        </div>
      </div>

        <div className="grid grid-cols-3 gap-4">
          { contractors.map( (contractor : contractorInformation) => (
            <Card key = {contractor.id} id = {contractor.id} company = {contractor.company} locationId = {contractor.locationId} email = {contractor.email} phoneNumber = {contractor.phoneNumber} city = {contractor.city} state = {contractor.state} zip = {contractor.zip} insuranceName = {contractor.insuranceName} insurancePhone = {contractor.insurancePhone} insuranceEmail = {contractor.insuranceEmail} jobs = {contractor.jobs} imageUrl = {contractor.imageUrl}  />
          ) ) }
        </div>
      </div>
    </main>
  )
}

