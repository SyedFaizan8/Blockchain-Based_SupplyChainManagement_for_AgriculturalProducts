import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCrop from "../../Customhooks/crops.jsx";
import { useSelector } from "react-redux";

const FarmerHome = () => {
  const [products, setCrops] = useState([]);
  const { getCrops } = useCrop();
  const address = useSelector((state) => state.addContract.address);

  useEffect(() => {
    const fetchData = async () => {
      const crops = await getCrops();
      setCrops(crops);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const filterFarmer = products.filter(
    (product) => product.ETHAddress == address
  );

  const konsa = (data) => {
    navigate(`/farmer/ProductDetails/${data.product.id}`);
  };

  if (filterFarmer.length === 0)
    return (
      <>
        <img
          src="/images/Bg.jpg"
          className="w-screen h-screen blur-lg opacity-60 fixed z-0"
          alt=""
        ></img>
        <div className="flex flex-col min-h-96 justify-center items-center gap-4 p-8 z-10 relative ">
          <div className="font-bold text-6xl">No Crops Found</div>
        </div>
      </>
    );

  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-screen h-screen blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="min-h-96 flex flex-col place-items-center gap-4 p-8 z-10 relative ">
        <div className="font-bold text-6xl">Overview</div>
        <table className=" w-full mx-2  h-auto rounded-lg overflow-hidden">
          <thead className="text-white text-md bg-blue-800 border-green-800 border-1 ">
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Crop Name</th>
              <th>ETH Address</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {filterFarmer.map((product, index) => (
              <tr
                onClick={() => konsa({ product: product })}
                key={product.id}
                className={`hover:bg-blue-100  ${
                  index === filterFarmer.length - 1
                    ? " "
                    : "border-b-2 border-blue-500"
                } `}
              >
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.cropName}</td>
                <td>{`${product.ETHAddress.substring(
                  0,
                  7
                )}...${product.ETHAddress.substring(37, 42)}`}</td>
                <td>{product.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FarmerHome;
