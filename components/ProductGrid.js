"use client"

import React from 'react'
import ProductBox from './ProductBox'

const ProductGrid = ({products}) => {

  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-4'> {products?.length > 0 && products.map(product => (
        <ProductBox key={product._id} {...product} />
      ))}</div>
  )
}

export default ProductGrid