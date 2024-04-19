import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { GiArchiveRegister } from "react-icons/gi";
import { MdOutlineDomainVerification } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";

const SideBar = ({ className }) => {
  const location = useLocation();

  return (
    <div
      className={`h-full bg-[#B7E4C7] z-10  ${className} shadow-lg shadow-black`}
    >
      <div className="flex flex-col  text-xl">
        <Link
          to="/authority/crop-validation"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/authority/crop-validation" && "bg-green-600"
          }`}
        >
          <GiArchiveRegister className="mt-1" />
          <span> Crop Validation</span>
        </Link>

        <Link
          to="/authority/midterm-verification"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/authority/midterm-verification" &&
            "bg-green-600"
          }`}
        >
          <MdOutlineDomainVerification className="mt-1" />
          <div>Midterm Verification</div>
        </Link>

        <Link
          to="/authority/final-certification"
          className={`cursor-pointer flex flex-row gap-1 p-3  hover:bg-green-600 transition ${
            location.pathname === "/authority/final-certification" &&
            "bg-green-600"
          }`}
        >
          <GrCertificate className="mt-1" />
          <div>Certification</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;