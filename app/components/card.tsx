import Image from 'next/image';
import Tag from './tag'
type Props = {
    name: String;
    phone: String;
}

export default function Card( {name, phone}: Props) {
    return(
        <>
                <div className="rounded-md pb-3 space-y-2 bg-white">
                        {/* <Image src="/deckimage.jpg" alt="Deck Image" height={160} width={284} style={{objectFit: 'contain'}}/> */}
                    <img src="/deckimage.jpg" alt="Deck Image" className="w-full object-cover rounded-md" />
                    <div className="px-3">
                        <Tag text="Deck Build"/>
                        <Tag text="Deck Test"/>
                        <Tag text="Deck Test"/>
                        <Tag text="Deck Test"/>
                        <p className="text-black truncate">{name}</p>
                        <p className="text-black truncate">Lake Elmo, MN</p>
                        <div className="grid grid-cols-2 gap-7">
                            <div className="col-span-1">
                                <p className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center">Contact Info</p>
                            </div>
                            <div className="col-span-1">
                                <p className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center">Check Insurer</p>
                            </div>
                        </div>
                        <p className="text-black truncate">Google Stars Here</p>
                    </div>
                </div>
        </>
    )
}