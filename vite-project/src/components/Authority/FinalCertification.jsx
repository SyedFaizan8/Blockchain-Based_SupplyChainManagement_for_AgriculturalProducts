import React, { useState, useEffect } from "react";
import Certificate from "../../Customhooks/certificate";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "./SideBar";

const FinalCertification = () => {
  const [certificate, setCertificate] = useState([]);
  const [state, setState] = useState("Approve");
  const { getCertificate } = Certificate();
  useEffect(() => {
    const fetchData = async () => {
      const certificate = await getCertificate();
      setCertificate(certificate);
    }

    fetchData();
  }, []);
  const productContract = useSelector(state => state.addContract.productContract);
  return (
    <>
      <Header />
      <main className="h-auto grid grid-cols-8">
        <SideBar className="col-span-2 z-10" />
        <div className="col-span-6">
          <img
            src="/images/Bg.jpg"
            className="w-screen h-screen blur-lg opacity-60 fixed z-0"
            alt=""
          ></img>
          <div className="flex flex-col place-items-center gap-4 p-8 z-10 relative ">
            <div className="font-bold text-6xl">Final certificate</div>
            <table className=" w-full mx-2  h-auto rounded-lg overflow-hidden">
              <thead className=" text-white text-xl bg-black border-green-800 border-2">
                <tr>
                  <th>ID</th>
                  <th>Crop</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center font-semibold bg-white">
                {certificate.map((element) => (
                  <tr key={element.id} className="border-2 border-green-800">
                    <td>{element.id}</td>
                    <td>{element.cropName}</td>
                    <td>{(element.quantity).toString()}</td>
                    <td>{(element.price).toString()} ETH</td>
                    <td>{element.category}</td>
                    <td>
                      {element.isApproved ? (
                        <button className="bg-green-500 rounded-lg my-2 p-2" disabled>Approved</button>
                      ) : (
                        <button onClick={async () => {
                          const date = new Date();
                          const time = date.toLocaleString();
                          await productContract.approveCertificate(element.id, time);
                          productContract.once("approveCertificateEvent", () => {
                            setState("Approved")
                            toast.success("certificate approved successfully");
                          });
                        }}
                          className={`${state === "Approved"
                            ? "bg-green-500"
                            : "bg-red-500"
                            } rounded-lg my-2 p-2`}
                        >{state}</button>
                      )}
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

export default FinalCertification;
