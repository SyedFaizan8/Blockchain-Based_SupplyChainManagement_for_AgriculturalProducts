import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "./SideBar";

const Farmer = () => {
  return (
    <div>
      <Header />
      <main className="h-full grid grid-cols-8">
        <SideBar className="col-span-2 z-10" />
        <div className="col-span-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Farmer;