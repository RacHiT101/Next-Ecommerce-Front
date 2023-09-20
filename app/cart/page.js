"use client";

import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);

  // console.log(cartProducts);

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

  const setproducts = async () => {
    if (cartProducts.length > 0) {
      const data = { cartProducts };
      // console.log("Hiii", cartProducts);
      const res = await axios.post("/api/cart", { ids: data.cartProducts });
      // console.log(res);
      setProducts(res.data);
    } else {
      setProducts([]);
    }
  };

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  useEffect(() => {
    setproducts();
  }, [cartProducts]);

  async function goToPayment() {

    const res = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (res.data.url) {
      window.location = res.data.url;
    }
    console.log(res.data);
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <div className="mx-10 px-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6/5 mt-10">
            <div className="bg-[#fff] p-8 rounded-xl">
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <Header />
      <div className="mx-10 px-5">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6/5 mt-10">
          <div className="bg-white rounded-1 p-6">
            <h1 className="mb-3 font-extrabold text-xl">Cart</h1>
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
                      <div className="py-2">
                        <div className="w-[150px] border border-opacity-[10px] rounded-3 flex items-center justify-center">
                          <img
                            className="max-w-[140px]"
                            src={product.images[0]}
                            alt=""
                          />
                        </div>
                        {product.title}
                      </div>
                      <td>
                        <button
                          className="border-0 py-2 px-3 shadow-sm bg-[#5542F6] text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold"
                          onClick={() => lessOfThisProduct(product._id)}
                        >
                          -
                        </button>
                        <span className="block md:inline-block px-4 md:px-10">
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </span>
                        <button
                          className="border-0 py-2 px-3 shadow-sm bg-[#5542F6] text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold"
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
                  <tr className="border-t-4">
                    <td></td>
                    <td></td>
                    <td className="mt-4">Total: ₹ {total}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          {!!cartProducts?.length && (
            <div className="bg-white rounded-4 p-8">
              <h2>Order information</h2>
              {/* <form method="post" action="/api/checkout"> */}
              <input
                type="text"
                placeholder="Name"
                className="w-full p-1 mb-1 border border-gray-300 rounded-5"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
              <input
                type="text"
                className="w-full p-1 mb-1 border border-gray-300 rounded-5"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  className="w-full p-1 mb-1 border border-gray-300 rounded-5"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <input
                  type="text"
                  className="w-full p-1 mb-1 border border-gray-300 rounded-5"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </div>
              <input
                type="text"
                className="w-full p-1 mb-1 border border-gray-300 rounded-5"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
              />
              <input
                type="text"
                className="w-full p-1 mb-1 border border-gray-300 rounded-5"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
              />
              <button
                className="border-0 py-2 px-2 shadow-sm bg-[#5542F6] text-white rounded cursor-pointer inline-flex items-center no-underline font-poppins font-semibold"
                onClick={goToPayment}
              >
                Continue to payment
              </button>
              {/* </form> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
