import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Midterm from "../../Customhooks/Midterm";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import SideBar from "./SideBar";
import Footer from "../Footer/Footer";
import ManageUsers from "../../Customhooks/manageUsers";

const MidtermVerification = () => {
  const [midTerms, setMidTerms] = useState([]);
  const { getMidTerms } = Midterm();
  const productContract = useSelector(
    (state) => state.addContract.productContract
  );
  const { getAllFarmers } = ManageUsers();

  useEffect(() => {
    const fetchData = async () => {
      const midTermsData = await getMidTerms();
      const farmers = await getAllFarmers();
      let midtermList = [];
      for (let i = 0; i < midTermsData.length; i++) {
        for (let j = 0; j < farmers.length; j++) {
          if (midTermsData[i].ETHAddress == farmers[j].ETHAddress) {
            midtermList.push(midTermsData[i]);
          }
        }
      }
      setMidTerms(midtermList);
    };

    fetchData();
  }, []);

  const handleApproveMidTerm = async (midTermId) => {
    const date = new Date();
    const time = date.toLocaleString();
    await productContract.approveMidTerm(midTermId, time);
    productContract.once("MidTermEvent", () => {
      toast.success("MidTerm approved successfully");
      setMidTerms((prevMidTerms) =>
        prevMidTerms.map((midTerm) =>
          midTerm.id === midTermId ? { ...midTerm, isApproved: true } : midTerm
        )
      );
    });
  };

  const handleRejectMidTerm = async (midTermId) => {
    const date = new Date();
    const time = date.toLocaleString();
    await productContract.rejectMidTerm(midTermId, time);
    productContract.once("MidTermEvent", () => {
      toast.success("MidTerm Rejected successfully");
      setMidTerms((prevMidTerms) =>
        prevMidTerms.map((midTerm) =>
          midTerm.id === midTermId
            ? { ...midTerm, isDisapproved: true, isApproved: false }
            : midTerm
        )
      );
    });
  };

  if (midTerms.length === 0)
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
          />
          <div className="min-h-96 flex flex-col place-items-center gap-4 p-8 z-10 relative ">
            <div className="font-bold text-6xl">Midterm verification</div>
            <table className="w-full h-auto rounded-lg overflow-hidden gap-2">
              <thead className="text-white text-md bg-blue-800 border-green-800 border-1 ">
                <tr>
                  <th>Index</th>
                  <th>ID</th>
                  <th>Crop Name</th>
                  <th>Time Till Harvest</th>
                  <th>Time of Applied</th>
                  <th>Approve</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody className="text-center font-semibold bg-white">
                {midTerms.map((midTerm, index) => (
                  <tr
                    key={midTerm.id}
                    className={`hover:bg-blue-100  ${
                      index === midTerms.length - 1
                        ? " "
                        : "border-b-2 border-blue-500"
                    } `}
                  >
                    <td>{index+1}</td>
                    <td>{midTerm.id}</td>
                    <td>{midTerm.cropName}</td>
                    <td>{midTerm.months}</td>
                    <td>{midTerm.timeofApplied}</td>
                    <td>
                      {midTerm.isApproved || midTerm.isDisapproved ? (
                        <button
                          className={`${
                            midTerm.isApproved ? "bg-green-500" : "hidden"
                          } rounded-lg my-1 p-1`}
                          disabled
                        >
                          {midTerm.isApproved ? "Approved" : "Approve"}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleApproveMidTerm(midTerm.id)}
                          className="bg-orange-500 rounded-lg my-1 p-1"
                        >
                          Approve
                        </button>
                      )}
                    </td>
                    <td>
                      {midTerm.isApproved || midTerm.isDisapproved ? (
                        <button
                          className={`${
                            midTerm.isDisapproved ? "bg-red-500" : "hidden"
                          } rounded-lg my-1 p-1`}
                          disabled
                        >
                          {midTerm.isDisapproved ? "Rejected" : "Reject"}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleRejectMidTerm(midTerm.id)}
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

export default MidtermVerification;
