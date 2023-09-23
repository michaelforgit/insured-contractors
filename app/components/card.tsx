import { Col, Row } from 'antd';
import Image from 'next/image';

type Props = {
    name: String;
    phone: String;
}

export default function Card( {name, phone}: Props) {
    return(
        <>
            <Col span={24} lg={8} >
                <div className="border-black border-2 rounded-md p-3">
                    <Row justify={'center'}>
                        <Image src="/deckimage.jpg" alt="Deck Image" width={100} height={100}/>
                    </Row>
                    <Row><p className="text-black truncate">{name}</p></Row>
                    <Row><p className="text-black truncate">Lake Elmo, MN</p></Row>
                    <Row><p className="text-black truncate">{phone}</p></Row>
                    <Row><p className="text-black truncate">jeff@gmail.com</p></Row>
                    <Row><p className="text-black truncate">Google Stars Here</p></Row>

                </div>
            </Col>
        </>
    )
}