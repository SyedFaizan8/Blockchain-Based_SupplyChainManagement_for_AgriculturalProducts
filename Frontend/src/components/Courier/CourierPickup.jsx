import React, { useState, useEffect } from "react";
import { Header, Footer } from "../index";
import usePayment from "../../Customhooks/usePayment";
import useCrop from "../../Customhooks/crops";

const CourierPickup = () => {
  const [orders, setOrders] = useState([]);
  const [crops, setCrops] = useState([]);
  const { getCrops } = useCrop();
  const { getOrders, orderPicked, productDelivered } = usePayment();

  const fetchData = async function () {
    const orders = await getOrders();
    const crops = await getCrops();
    setCrops(crops);
    setOrders(orders);
  };

  const handleApproval = async (product) => {
    await orderPicked(product.productId, product.orderId);
  };

  const handleDelivery = async (product) => {
    await productDelivered(product.productId, product.orderId);
  };

  useEffect(() => {
    fetchData();
  }, [handleApproval, handleDelivery]);

  if (!orders) {
    return <>Loading..</>;
  }

  if (orders.length === 0)
    return (
      <>
        <img
          src="/images/Bg.jpg"
          className="w-full h-full blur-lg opacity-60 fixed z-0"
          alt=""
        ></img>
        <div className="min-h-96 flex flex-col justify-center items-center gap-4 p-8 z-10 relative ">
          <div className="font-bold text-6xl">Nothing to show here</div>
        </div>
      </>
    );

  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-full h-full blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="min-h-96 flex flex-col place-items-center gap-4 p-8 z-10 relative ">
        <div className="font-bold text-6xl">Pick Up</div>
        <table className="w-full mx-2 h-auto rounded-lg overflow-hidden gap-2">
          <thead className="text-white text-md bg-blue-800 border-green-800 border-1">
            <tr>
              <th>Index</th>
              <th>Order ID</th>
              <th>Product ID</th>
              {/* <th>Farmer Address</th> */}
              <th>Crop Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Ordered On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {orders.map((product, index) => (
              <tr
                key={product.key}
                className={`hover:bg-blue-100  ${
                  index === orders.length - 1
                    ? " "
                    : "border-b-2 border-blue-500"
                } `}
              >
                <td>{index + 1}</td>
                <td>{product.orderId}</td>
                <td>{product.productId}</td>
                {/* <td>{crops.filter((crop) => crop.id == product.productId)}</td> */}
                <td>{product.productName}</td>
                <td>{product.quantity.toString()} KG</td>
                <td>{(Number(product.price) / 1e18).toString()} ETH</td>
                <td>{product.timeofOrdered}</td>
                <td className="gap-2 flex">
                  <button
                    onClick={() => handleApproval(product)}
                    className={`${
                      product.status.toString() === "Picked" ||
                      product.status.toString() === "Delivered"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    } rounded-lg my-1 p-1 text-center`}
                    disabled={
                      product.status.toString() === "Picked" ||
                      product.status.toString() === "Delivered"
                    }
                  >
                    {product.status.toString() === "Picked" ||
                    product.status.toString() === "Delivered"
                      ? "PickedUp"
                      : "PickUp"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourierPickup;
