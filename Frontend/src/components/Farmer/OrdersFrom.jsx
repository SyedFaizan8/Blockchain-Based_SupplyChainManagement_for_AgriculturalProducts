import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import usePayment from "../../Customhooks/usePayment";

const OrdersFrom = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const address = useSelector((state) => state.addContract.address);
  const [orders, setOrders] = useState([]);
  const { getOrders } = usePayment();

  const fetchData = async function () {
    const orders = await getOrders();
    setOrders(orders);
  };

  const filterOrder = orders.filter((order) => order.farmer == address);

  if (filterOrder.length === 0)
    return (
      <>
        <img
          src="/images/Bg.jpg"
          className="w-screen h-screen blur-lg opacity-60 fixed z-0"
          alt=""
        ></img>
        <div className="flex flex-col min-h-96 justify-center items-center gap-4 p-8 z-10 relative ">
          <div className="font-bold text-6xl">No Orders Found</div>
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
      <div className="flex flex-col place-items-center gap-4 p-8 z-10 relative ">
        <div className="font-bold text-6xl">Order From</div>
        <table className="w-full h-auto rounded-lg overflow-hidden gap-2">
          <thead className=" text-white text-md bg-blue-800 border-green-800 border-1">
            <tr>
              <th>Index</th>
              <th>OID</th>
              <th>PID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Ordered on</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {filterOrder.map((order, index) => (
              <tr
                key={order.key}
                className={`hover:bg-blue-100  ${
                  index === filterOrder.length - 1
                    ? " "
                    : "border-b-2 border-blue-500"
                } `}
              >
                <td>{index + 1}</td>
                <td>{order.orderId}</td>
                <td>{order.productId}</td>
                <td>{order.productName}</td>
                <td>{(Number(order.price) / 1e18).toString()} ETH</td>
                <td>{order.timeofOrdered}</td>
                <td>{`${order.customer.substring(
                  0,
                  7
                )}...${order.customer.substring(37, 42)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersFrom;
