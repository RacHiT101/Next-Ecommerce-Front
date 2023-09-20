"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "./CartContext";



const Featured = ({ product }) => {

  const {addProduct} = useContext(CartContext);


  const addFeaturedToCart = () => {

    addProduct(product._id)

  }

  return (
    <div className="bg-[#222] text-[#fff] py-[50px]">
      <div className="mx-10 px-5">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-11/10">
          <div className="order-3 md:order-1">
            <div className="m-0 font-normal text-lg md:text-3xl mt-5">
              {product.title}
            </div>
            <div className="text-[#aaa] text-[0.8rem] mt-3">
              {product.description}
            </div>
            <div className="flex gap-2 mt-6">
              <Link
                href={"/product/" + product?._id}
                className="border-0 py-2 shadow-sm px-2 bg-[#222] border-x-2 border-y-2 shadow-sm border-white text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold"
              >
                Read More
              </Link>
              <button onClick={() => addFeaturedToCart} className="border-0 py-2 px-2 shadow-sm bg-[#5542F6] text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold">
                <AiOutlineShoppingCart className="mr-2" size={24} /> Add to Cart
              </button>
            </div>
          </div>
          <Image
            src="/images/mac2.jpeg"
            alt="Mac"
            width={350}
            height={200}
            className="mx-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
