import Image from "next/image";
import Link from "next/link";
import React from "react";

import {AiOutlineShoppingCart} from 'react-icons/ai';

const Featured = ({product}) => {


  return (
    <div className="bg-[#222] text-[#fff] py-[50px]">
      <div className="mx-10 px-5">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-11/10">
          
           <div className="order-3 md:order-1">
            <div className="m-0 font-normal text-lg md:text-3xl mt-5">Pro MacBook</div>
            <div className="text-[#aaa] text-[0.8rem] mt-3">The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apples macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005. The current lineup consists of the MacBook Air (2008–present) and the MacBook Pro (2006–present). Two different lines simply named MacBook existed from 2006 to 2012 and 2015 to 2019. The MacBook brand was the worlds top-selling line of premium laptops as of 2015.[1]</div>
            <div className="flex gap-2 mt-6">
                <Link href={'/product/'+product?._id} className="border-0 py-2 shadow-sm px-2 bg-[#222] border-x-2 border-y-2 shadow-sm border-white text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold">Read More</Link>
                <button className="border-0 py-2 px-2 shadow-sm bg-[#5542F6] text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold"><AiOutlineShoppingCart className="mr-2" size={24} /> Add to Cart</button>
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
