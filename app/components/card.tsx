import Image from 'next/image';
import Tag from './tag'
type Props = {
    name: String;
    phone: String;
}

export default function Card( {name, phone}: Props) {
    return(
        <>
                <div className="rounded-md p-3 space-y-2 bg-white">
                    <div className="justify-center h-40 w-full">
                        <Image src="/deckimage.jpg" alt="Deck Image" height={160} width={284} style={{objectFit: 'contain'}}/>
                    </div>
                    <Tag text="Deck Build"/>
                    <Tag text="Deck Test"/>
                    <Tag text="Deck Test"/>
                    <Tag text="Deck Test"/>
                    <p className="text-black truncate">{name}</p>
                    <p className="text-black truncate">Lake Elmo, MN</p>
                    <p className="text-black truncate">{phone}</p>
                    <p className="text-black truncate">jeff@gmail.com</p>
                    <p className="text-black truncate">Insurer Info</p>
                    <p className="text-black truncate">Google Stars Here</p>
                </div>
        </>
    )
}