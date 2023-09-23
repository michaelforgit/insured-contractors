import Image from 'next/image'
import Card from './components/card'
import { Row } from 'antd';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-8 md:p-24">
      <div className="w-full">
        <Row gutter={[16, 16]}>
          <Card name="Marnath Testffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" phone="651-222-4433"/>
          <Card name="Michael The Great" phone="651-222-4433"/>
          <Card name="Bob Jefferson" phone="651-222-4433"/>
          <Card name="Mathew Peterson" phone="651-222-4433"/>
        </Row>
      </div>
    </main>
  )
}
