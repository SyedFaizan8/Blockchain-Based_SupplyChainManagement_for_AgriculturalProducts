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
      <div className="text-gray-900 z-10 relative border-4 border-solid border-black">
        <div className="">
          <div className="flex justify-center items-center px-10 py-10 border-4 border-solid border-black">
            <Button
              onClick={() => navigate("/farmer/crop-registration")}
              className={"w-52"}
            >
              Crop Registration
            </Button>
          </div>
          <div className="flex justify-center items-center px-10 py-10 border-4 border-solid border-black">
            <Button
              onClick={() => navigate("/farmer/midterm-verify")}
              className={"w-52"}
            >
              Apply mid term verification
            </Button>
          </div>
          <div className="flex justify-center items-center px-10 py-10 border-4 border-solid border-black">
            <Button
              onClick={() => navigate("/farmer/request-certification")}
              className={"w-52"}
            >
              Request for Certification
            </Button>
          </div>
          <div className="flex justify-center items-center px-10 py-10 border-4 border-solid border-black">
            <Button
              onClick={() => navigate("/farmer/orders-from")}
              className="w-52"
            >
              Orders from{" "}
            </Button>
          </div>
          <div className="flex justify-center items-center px-10 py-10 border-4 border-solid border-black ">
            <Button
              onClick={() => navigate("/farmer/pick-up-fromcourier")}
              className="w-52"
            >
              Pick up from Couriers
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FarmerHome;
