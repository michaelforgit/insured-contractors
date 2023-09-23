import Image from 'next/image'
import Card from './components/card'
export default function Home() {
  return (
    <main className="flex min-h-screen p-8 md:px-48 bg-[#f2f2f7]">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4">
          <Card name="Marnath Testffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" phone="651-222-4433"/>
          <Card name="Michael The Great" phone="651-222-4433"/>
          <Card name="Bob Jefferson" phone="651-222-4433"/>
          <Card name="Mathew Peterson" phone="651-222-4433"/>
        </div>
      </div>
    </main>
  )
}
