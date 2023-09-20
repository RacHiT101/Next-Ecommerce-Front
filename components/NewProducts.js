"use client"

import React from 'react'
import ProductGrid from './ProductGrid';

const NewProducts = ({products}) => {
  return (
    <div className='px-5 mx-10 bg-[]'>
        <div className='text-[2rem] mt-8 mb-5 font-normal'>New Arrivals</div>
        <ProductGrid products={products} />
    </div>
  )
}

export default NewProducts