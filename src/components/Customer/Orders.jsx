import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { products } from "../data.js";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  const konsa = (data) => {
    navigate(`/OrderDetails/${data}`);
  };

  return (
    <>
      <Header />
      <div className="min-h-52 overflow-y-hidden z-10 relative shadow-sm shadow-black">
        <img
          src="images/Products.jpg"
          alt="BG"
          className="z-10 absolute blur-sm"
        />
        <div className="absolute z-30 font-bold text-9xl flex w-full h-full justify-center items-center text-white ">
          Orders
        </div>
      </div>
      <div className="flex flex-col place-items-center p-8 z-10 relative ">
        <table className=" w-full mx-2  h-auto rounded-lg overflow-hidden">
          <thead className=" text-white text-xl bg-black border-green-800 border-2">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {products.map((product) => (
              <tr
                onClick={() => konsa(product.id)}
                key={product.id}
                className="border-2 border-green-800 hover:bg-slate-400"
              >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
