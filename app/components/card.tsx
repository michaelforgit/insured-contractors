"use client";
import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Image from 'next/image';
import Tag from './tag'
import Popover from './popover'

type Props = {
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


export default function Card( {id, company, locationId, email, phoneNumber, city, state, zip, insuranceName, insurancePhone, insuranceEmail, jobs, imageUrl}: Props) {
    console.log(imageUrl)
    const [rating, setRating] = useState(0);

    const fullStars = Array.from({length: rating}, (_, index) => (
        <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    ) )
    const emptyStars = Array.from({length: 5 - rating}, (_, index) => (
        <svg key={index} className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    ) )
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/${locationId}`);
                const data = await response.json();
        
                console.log('Data:', data?.rating);
                setRating(Math.floor(data?.rating) || Math.floor(Math.random() * 5) + 1)
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        
        fetchData();

    }, []);
    
    
    return(
        <>
                <div className="col-span-3 md:col-span-1 rounded-md pb-3 space-y-2 bg-white ">
                    <div className="relative">
                        <div className="absolute right-2 top-2 h-7 w-7 opacity-0 hover:opacity-100 hover:text-black"> <a href={`/contractors/${id}/edit`}><FaPencilAlt className="w-full h-full"/></a></div>
                        <img src={imageUrl} alt="Deck Image" className="w-full object-cover rounded-md h-[125px]" />
                    </div>
                    <div className="px-3 space-y-2">
                        <div className="flex flex-wrap justify-start">
                            { jobs?.map( (job, index) => (
                                <Tag key={index} text={job}/>
                            ) ) }
                        </div>
                        <p className="text-black truncate">{company}</p>
                        <p className="text-black truncate">{city}, {state}</p>
                        
                        <div className="flex items-center space-x-1 justify-center" >
                            { fullStars }
                            { emptyStars }
                        </div>
                        <div className="grid grid-cols-2 justify-items-center">
                            <Popover
                            triggerText="Contact"
                            content={
                                <div className="p-4 w-max">
                                    <p className="text-black">{email}</p>
                                    <p className="text-black">{phoneNumber}</p>
                                </div>
                            }
                            />
                            <Popover
                            triggerText="Insurer"
                            content={
                                <div className="p-4">
                                    <p className="text-black">{insuranceName}</p>
                                    <p className="text-black">{insurancePhone}</p>
                                </div>
                            }
                            />
                        </div>
                    </div>
                </div>
        </>
    )
}