import React, { useState, useEffect } from "react";
import Certificate from "../../Customhooks/certificate";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "./SideBar";
import ManageUsers from "../../Customhooks/manageUsers";

const FinalCertification = () => {
  const [certificate, setCertificate] = useState([]);
  const { getCertificate } = Certificate();
  const productContract = useSelector(
    (state) => state.addContract.productContract
  );
  const { getAllFarmers } = ManageUsers();

  useEffect(() => {
    const fetchData = async () => {
      const certificateData = await getCertificate();
      const farmers = await getAllFarmers();
      let certificateList = [];
      for (let i = 0; i < certificateData.length; i++) {
        for (let j = 0; j < farmers.length; j++) {
          if (certificateData[i].ETHAddress == farmers[j].ETHAddress) {
            certificateList.push(certificateData[i]);
          }
        }
      }
      setCertificate(certificateList);
    };

    fetchData();
  }, []);

  const handleApproveCertificate = async (certificateId) => {
    const date = new Date();
    const time = date.toLocaleString();
    await productContract.approveCertificate(certificateId, time);
    productContract.once("CertificateEvent", () => {
      toast.success("Certificate approved successfully");
      setCertificate((prevCertificate) =>
        prevCertificate.map((element) =>
          element.id === certificateId
            ? { ...element, isApproved: true }
            : element
        )
      );
    });
  };

  const handleRejectCertificate = async (certificateId) => {
    const date = new Date();
    const time = date.toLocaleString();
    await productContract.rejectCertificate(certificateId, time);
    productContract.once("CertificateEvent", () => {
      toast.success("Certificate Rejected successfully");
      setCertificate((prevCertificate) =>
        prevCertificate.map((element) =>
          element.id === certificateId
            ? { ...element, isDisapproved: true, isApproved: false }
            : element
        )
      );
    });
  };

  if (certificate.length === 0)
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
              <div className="font-bold text-6xl">No Crops Found</div>
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
            className="w-screen h-screen blur-lg opacity-60 fixed z-0"
            alt=""
          ></img>
          <div className="flex flex-col place-items-center gap-4 p-8 z-10 relative ">
            <div className="font-bold text-6xl">Final certificate</div>
            <table className="w-full h-auto rounded-lg overflow-hidden gap-2">
              <thead className="text-white text-md bg-blue-800 border-green-800 border-1 ">
                <tr>
                  <th>Index</th>
                  <th>ID</th>
                  <th>Crop</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Approve</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody className="text-center font-semibold bg-white">
                {certificate.map((element, index) => (
                  <tr
                    key={element.id}
                    className={`hover:bg-blue-100  ${
                      index === certificate.length - 1
                        ? " "
                        : "border-b-2 border-blue-500"
                    } `}
                  >
                    <td>{index+1}</td>
                    <td>{element.id}</td>
                    <td>{element.cropName}</td>
                    <td>{element.quantity.toString()}</td>
                    <td>{element.price} ETH</td>
                    <td>
                      {element.isApproved || element.isDisapproved ? (
                        <button
                          className={`${
                            element.isApproved ? "bg-green-500" : "hidden"
                          } rounded-lg my-1 p-1`}
                          disabled={true}
                        >
                          {element.isApproved ? "Approved" : "Approve"}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleApproveCertificate(element.id)}
                          className="bg-orange-500 rounded-lg my-1 p-1"
                        >
                          Approve
                        </button>
                      )}
                    </td>
                    <td>
                      {element.isDisapproved || element.isApproved ? (
                        <button
                          className={`${
                            element.isDisapproved ? "bg-red-500" : "hidden"
                          } rounded-lg my-1 p-1`}
                          disabled={true}
                        >
                          {element.isDisapproved ? "Rejected" : "Reject"}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleRejectCertificate(element.id)}
                          className="bg-orange-500 rounded-lg my-1 p-1"
                        >
                          Reject
                        </button>
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
