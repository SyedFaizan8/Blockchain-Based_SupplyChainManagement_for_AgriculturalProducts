import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { GiArchiveRegister } from "react-icons/gi";
import { MdOutlineDomainVerification } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { VscListOrdered } from "react-icons/vsc";
import { MdOutlineLocalShipping } from "react-icons/md";

const SideBar = ({ className }) => {
  const location = useLocation();

  return (
    <div
      className={`h-full bg-[#B7E4C7] z-10  ${className} shadow-lg shadow-black`}
    >
      <div className="flex flex-col  text-xl">
        <Link
          to="/farmer"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/farmer" && "bg-green-600"
          }`}
        >
          <GrOverview className="mt-1" />
          <span>Overview</span>
        </Link>

        <Link
          to="/farmer/crop-registration"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/farmer/crop-registration" && "bg-green-600"
          }`}
        >
          <GiArchiveRegister className="mt-1" />
          <span> Crop Registeration</span>
        </Link>

        <Link
          to="/farmer/midterm-verify"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/farmer/midterm-verify" && "bg-green-600"
          }`}
        >
          <MdOutlineDomainVerification className="mt-1" />
          <div>Mid Term Verification</div>
        </Link>

        <Link
          to="/farmer/request-certification"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/farmer/request-certification" &&
            "bg-green-600"
          }`}
        >
          <GrCertificate className="mt-1" />
          <div>Certification</div>
        </Link>

        <Link
          to="/farmer/orders-from"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/farmer/orders-from" && "bg-green-600"
          }`}
        >
          <VscListOrdered className="mt-1" />
          <div>Orders</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;