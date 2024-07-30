import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "./SideBar";

const Courier = () => {
  return (
    <div>
      <Header />
      <main className="h-full grid grid-cols-10">
        <SideBar className="col-span-1 z-10" />
        <div className="col-span-9">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courier;
