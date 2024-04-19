import React, { useState, useEffect } from "react";
import { cropRegistration } from "../data";
import { Header, Footer } from "../index";
import usePayment from "../../Customhooks/usePayment";

const Dash = () => {
  const [delivery, setDelivery] = useState({});
  const [orders, setOrders] = useState([]);
  const { getOrders, orderPicked, productDelivered } = usePayment();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const orders = await getOrders();
    setOrders(orders);
  }


  const handleApproval = async (product) => {
    await orderPicked(product.productId, product.orderId);
  };

  const handleDelivery = async (product) => {
    await productDelivered(product.productId, product.orderId);
  };

  if (!orders) {
    return <>
      Loading..
    </>
  }

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
              <th>Order ID</th>
              <th>Farmer Name</th>
              <th>Crop Name</th>
              <th>Ordered</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Pick Up</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {orders.map((product) => (
              <tr
                key={product.key}
                className="border-2 border-green-800 hover:bg-slate-400"
              >
                <td>{product.productId}</td>
                <td>{product.farmer}</td>
                <td>{product.productName}</td>
                <td>{product.timeofOrdered}</td>
                <td>{(Number(product.price) / 1e18).toString()} ETH</td>
                <td>{(product.quantity).toString()} KG</td>
                <td className="gap-2 flex">
                  <button
                    onClick={() => handleApproval(product)}
                    className={`${(product.status).toString() === "Picked" || (product.status).toString() === "Delivered"
                      ? "bg-green-500"
                      : "bg-red-500"
                      } rounded-lg my-2 p-2`}
                    disabled={(product.status).toString() === "Picked" || (product.status).toString() === "Delivered"}
                  >
                    {(product.status).toString() === "Picked" || (product.status).toString() === "Delivered" ? "PickedUp" : "PickUp"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelivery(product)}
                    className={`${(product.status).toString() === "Delivered"
                      ? "bg-green-500"
                      : "bg-red-500"
                      } rounded-lg my-2 p-2`}
                    disabled={(product.status).toString() === "Delivered"}
                  >
                    {(product.status).toString() === "Delivered"
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