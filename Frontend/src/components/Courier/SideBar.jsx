import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GiFarmer } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const SideBar = ({ className }) => {
  const location = useLocation();

  return (
    <div
      className={`h-full bg-[#B7E4C7] z-10  ${className} shadow-lg shadow-black`}
    >
      <div className="flex flex-col  text-xl">
        <Link
          to="/courier"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/courier" && "bg-green-600"
          }`}
        >
          <GiFarmer className="mt-1" />
          <span>Pick Up</span>
        </Link>

        <Link
          to="/courier/delivery"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/courier/delivery" && "bg-green-600"
          }`}
        >
          <TbTruckDelivery className="mt-1" />
          <span>Delivery</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
