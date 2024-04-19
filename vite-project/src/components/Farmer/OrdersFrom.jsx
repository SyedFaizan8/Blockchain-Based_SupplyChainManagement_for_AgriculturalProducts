import React from "react";
import { products } from "../data";

const OrdersFrom = () => {
  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-screen h-screen blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="flex flex-col place-items-center gap-4 p-8 z-10 relative ">
        <div className="font-bold text-6xl">Order From</div>
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
              <tr key={product.id} className="border-2 border-green-800">
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersFrom;
