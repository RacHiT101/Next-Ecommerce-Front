
import { CartContext } from '@/components/CartContext';
import Featured from '@/components/Featured'
import Header from '@/components/Header'
import NewProducts from '@/components/NewProducts';
import { getServerSideProps } from '@/lib/props';
import { Product } from '@/models/Product';
import Image from 'next/image'
import { useContext } from 'react';

export default async function Home() {

  

  const products = await getServerSideProps();
  
  return (
    <div>
      <Header />
      <Featured product={products?.props.featuredProduct} />
      <NewProducts products={products?.props.newProducts} />
    </div>
  )
}




