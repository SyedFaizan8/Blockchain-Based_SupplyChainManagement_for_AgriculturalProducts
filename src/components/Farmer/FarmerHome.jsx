import React from "react";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";

const FarmerHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-screen h-screen blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="text-gray-900 z-10 min-h-[90vh]  relative  justify-center items-center flex">
        <div className="text-8xl font-bond">Hello world</div>
      </div>
    </>
  );
};

export default FarmerHome;
