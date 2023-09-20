"use client";

import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import React, { useContext, useState } from "react";

const Cart = () => {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  return (
    <div>
      <Header />
      <div className="mx-10 px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-6/5 mt-10">
          <div className="bg-white rounded-4 p-8">
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <table className="w-full">
                <thead>
                  <tr className="text-left text-uppercase text-gray-300 font-semibold text-xs">
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product._id}
                      className="border-t border-opacity-10"
                    >
                      <div className="py-4">
                        <div className="w-70 h-100 p-2 border border-opacity-10 rounded-10 flex items-center justify-center">
                          <img
                            className="max-w-60 max-h-60"
                            src={product.images[0]}
                            alt=""
                          />
                        </div>
                        {product.title}
                      </div>
                      <td>
                        <button
                          className="border-0 py-2 px-2 shadow-sm bg-[#5542F6] text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold"
                          onClick={() => lessOfThisProduct(product._id)}
                        >
                          -
                        </button>
                        <span className="block md:inline-block px-15 md:px-10">
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </span>
                        <button
                          className="border-0 py-2 px-2 shadow-sm bg-[#5542F6] text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold"
                          onClick={() => moreOfThisProduct(product._id)}
                        >
                          +
                        </button>
                      </td>
                      <td>
                        $
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
