import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import usePayment from "../../Customhooks/usePayment";

const OrdersFrom = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const address = useSelector(state => state.addContract.address);
  const [orders, setOrders] = useState([]);
  const { getOrders } = usePayment();

  const fetchData = async function () {
    const orders = await getOrders();
    setOrders(orders);
  }

  const filterOrder = orders.filter((order) => order.farmer == address);

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
              <th>OID</th>
              <th>PID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Ordered</th>
              <th>customer</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {filterOrder.map((order) => (
              <tr key={order.key} className="border-2 border-green-800">
                <td>{order.orderId}</td>
                <td>{order.productId}</td>
                <td>{order.productName}</td>
                <td>{(Number(order.price) / 1e18).toString()} ETH</td>
                <td>{order.timeofOrdered}</td>
                <td>{order.customer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersFrom;
