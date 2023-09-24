import Image from 'next/image';
import Tag from './tag'
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
}

export default function Card( {id, company, locationId, email, phoneNumber, city, state, zip, insuranceName, insurancePhone, insuranceEmail}: Props) {
    return(
        <>
                <div className="col-span-3 lg:col-span-1 rounded-md pb-3 space-y-2 bg-white">
                    <img src="/deckimage.jpg" alt="Deck Image" className="w-full object-cover rounded-md" />
                    <div className="px-3 space-y-4">
                        <div className="flex flex-nowrap">
                            <Tag text="Deck Build"/>
                            <Tag text="Deck Test"/>
                            <Tag text="Deck Test"/>
                            <Tag text="Deck Test"/>
                        </div>
                        <p className="text-black truncate">{company}</p>
                        <p className="text-black truncate">{city}, {state}</p>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 p-3">
                                <p className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center">Contact</p>
                            </div>
                            <div className="col-span-1 p-3">
                                <p className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center">Insurer</p>
                            </div>
                        </div>
                        <p className="text-black truncate">Google Stars Here</p>
                    </div>
                </div>
        </>
    )
}