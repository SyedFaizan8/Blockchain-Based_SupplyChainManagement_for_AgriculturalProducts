import React, { useState } from "react";
import { cropRegistration } from "../data";
import { Header, Footer } from "../index";

const Dash = () => {
  const [productStatus, setProductStatus] = useState({});
  const [delivery, setDelivery] = useState({});

  const handleApproval = (productId) => {
    if (!productStatus[productId] || productStatus[productId] !== "Approved") {
      setProductStatus((prevStatus) => ({
        ...prevStatus,
        [productId]: "Approved",
      }));
    }
  };

  const handleDelivery = (productId) => {
    if (!delivery[productId] || delivery[productId] !== "Delivery") {
      setDelivery((prevStatus) => ({
        ...prevStatus,
        [productId]: "Delivered",
      }));
    }
  };

  return (
    <>
      <Header />
      <img
        src="/images/Bg.jpg"
        className="w-full h-full blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="flex flex-col place-items-center gap-4 p-8 z-10 relative ">
        <div className="font-bold text-6xl">Crop Validation</div>
        <table className="w-full mx-2 h-auto rounded-lg overflow-hidden">
          <thead className="text-white text-md bg-black border-green-800 border-2">
            <tr>
              <th>ID</th>
              <th>Farmer Name</th>
              <th>Crop Name</th>
              <th>Address</th>
              <th>Cultivation Area</th>
              <th>Time Till Harvest</th>
              <th>Expected Yield</th>
              <th>Pick Up</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {cropRegistration.map((product) => (
              <tr
                key={product.id}
                className="border-2 border-green-800 hover:bg-slate-400"
              >
                <td>{product.id}</td>
                <td>{product.farmerName}</td>
                <td>{product.CropName}</td>
                <td>{product.landAddress}</td>
                <td>{product.AreaOfCultivation}</td>
                <td>{product.TimeRequiredTillHarvest}</td>
                <td>{product.ExpectedYield}</td>
                <td className="gap-2 flex">
                  <button
                    onClick={() => handleApproval(product.id)}
                    className={`${
                      productStatus[product.id] === "Approved"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } rounded-lg my-2 p-2`}
                    disabled={productStatus[product.id] === "Approved"}
                  >
                    {productStatus[product.id] === "Approved"
                      ? "Approved"
                      : "Approve"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelivery(product.id)}
                    className={`${
                      delivery[product.id] === "Delivered"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } rounded-lg my-2 p-2`}
                    disabled={delivery[product.id] === "Delivered"}
                  >
                    {delivery[product.id] === "Delivered"
                      ? "Delivered"
                      : "Delivery"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Dash;
