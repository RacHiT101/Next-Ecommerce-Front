import Featured from '@/components/Featured'
import Header from '@/components/Header'
import mongoose from 'mongoose'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <Featured />
    </div>
  )
}

export function getServerSideProps(){
   mongoose.connect(process.env.MONGO_URI)

}
