import React, { useState } from "react";
import { cropRegistration } from "../data.js";
import { Header, Footer } from "../index.js";
import { SideBar } from "./index.js";

const CropValidation = () => {
  const [productStatus, setProductStatus] = useState({});

  const handleApproval = (productId) => {
    if (!productStatus[productId] || productStatus[productId] !== "Approved") {
      setProductStatus((prevStatus) => ({
        ...prevStatus,
        [productId]: "Approved",
      }));
    }
  };

  return (
    <>
      <Header />
      <main className="h-auto grid grid-cols-8">
        <SideBar className="col-span-2 z-10" />
        <div className="col-span-6">
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
                  <th>Status</th>
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
                    <td>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CropValidation;
