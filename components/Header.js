'use client'

import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {

  const {cartProducts} = useContext(CartContext);

  return (
    <div className="bg-[#222]">
      <div className="mx-10 px-5 flex justify-between py-5">
        <Link href={"/"} className="text-white">
          Ecommerce
        </Link>
        <nav className="fixed top-0 bottom-0 left-0 right-0 gap-16 text-[#aaa] mr-10 p-20 md:static md:flex md:justify-start md:p-0">
          <Link
            className="block text-gray-500 no-underline p-2 md:p-0"
            href="/"
          >
            Home
          </Link>
          <Link
            className="block text-gray-500 no-underline p-2 md:p-0"
            href="/products"
          >
            All products
          </Link>
          <Link
            className="block text-gray-500 no-underline p-2 md:p-0"
            href="/categories"
          >
            Categories
          </Link>
          <Link
            className="block text-gray-500 no-underline p-2 md:p-0"
            href="/account"
          >
            Account
          </Link>
          <Link
            className="block text-gray-500 no-underline p-2 md:p-0"
            href="/cart"
          >
            Cart ({cartProducts.length})
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
