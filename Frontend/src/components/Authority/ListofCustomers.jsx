import React, { useEffect, useState } from "react";
import { Header, Footer } from "../index.js";
import { SideBar } from "./index.js";
import ManageUsers from "../../Customhooks/manageUsers.jsx";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ListofCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const { getAllCustomers } = ManageUsers();
  const userContract = useSelector((state) => state.addContract.userContract);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const customers = await getAllCustomers();
    setCustomers(customers);
  };

  const handleApproval = async (ETHAddress) => {
    await userContract.deleteCustomer(ETHAddress);
    let updated = [];
    userContract.once("deleteCustomerEvent", () => {
      updated = customers.filter((customer) => {
        if (customer.ETHAddress != ETHAddress) {
          return customer;
        }
      });
      setCustomers(updated);
      toast.success("Deleted");
    });
  };

  if (!customers) {
    return <>Loading...</>;
  }

  if (customers.length === 0)
    return (
      <>
        <Header />
        <main className="min-h-96 grid grid-cols-8">
          <SideBar className="col-span-2 z-10" />
          <div className="col-span-6">
            <img
              src="/images/Bg.jpg"
              className="w-screen h-screen blur-lg opacity-60 fixed z-0"
              alt=""
            ></img>
            <div className="flex flex-col h-full justify-center items-center gap-4 p-8 z-10 relative ">
              <div className="font-bold text-6xl">No Customers Found</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );

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
          <div className="min-h-96 flex flex-col place-items-center gap-4 p-8 z-10 relative ">
            <div className="font-bold text-6xl">Customers</div>
            <table className="w-full h-auto rounded-lg overflow-hidden gap-2">
              <thead className="text-white text-md bg-blue-800 border-green-800 border-1 ">
                <tr>
                  <th>Index</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>ETH Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center font-semibold bg-white">
                {customers.map((customer, index) => (
                  <tr
                    key={customer.key}
                    className={`hover:bg-blue-100  ${
                      index === customers.length - 1
                        ? " "
                        : "border-b-2 border-blue-500"
                    } `}
                  >
                    <td>{customer.key + 1}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>

                    <td>{`${customer.ETHAddress.substring(
                      0,
                      7
                    )}...${customer.ETHAddress.substring(37, 42)}`}</td>
                    <td>
                      <button
                        className="bg-orange-500 rounded-lg my-1 p-1"
                        onClick={() => handleApproval(customer.ETHAddress)}
                      >
                        Remove
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

export default ListofCustomers;
