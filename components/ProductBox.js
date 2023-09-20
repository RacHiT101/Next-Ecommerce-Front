"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "./CartContext";

const ProductBox = ({ _id, title, description, price, images }) => {

    const url = '/product/'+_id;

    const {addProduct} = useContext(CartContext);
  // console.log(_id);
  return (
    <div className="mb-10">
      <Link
        href={url}
        className="bg-white p-5 h-30 text-center flex items-center justify-center rounded-10"
      >
        <img src={images?.[0]} alt="" className="max-w-[100%] max-h-[150px]" />
      </Link>
      <div className="mx-12">
        <Link href={url} className="font-normal text-sm text-inherit no-underline">
          {title}
        </Link>
        <div className="block whitespace-nowrap md:flex md:gap-5 items-center justify-between">
            <div className="text-right text-base md:text-left md:text-lg font-semibold">
               ₹ {price}

            </div>
            <button onClick={() => addProduct(_id)} className="border-0 py-1 px-5 shadow-sm bg-[#5542F6] text-white rounded cursor-pointer inline-flex items-center whitespace-nowrap no-underline font-poppins font-semibold">
            <AiOutlineShoppingCart className="mr-2" size={24} /> Add to cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductBox;
