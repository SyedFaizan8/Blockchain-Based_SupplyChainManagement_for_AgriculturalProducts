import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Orders = () => {
  return (
    <>
      <Header />
      <div className="h-80 overflow-y-hidden z-10 relative shadow-sm shadow-black">
        <img
          src="images/Products.jpg"
          alt="BG"
          className="z-10 absolute blur-sm"
        />
        <div className="absolute z-30 font-bold text-9xl flex w-full h-full justify-center items-center text-white -mt-8">
          Orders
        </div>
      </div>
      <div className="h-full w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        id corrupti impedit, quidem possimus fugit, soluta, eius ullam error quo
        saepe aliquam quas eligendi voluptates?
      </div>
      <Footer />
    </>
  );
};

export default Orders;
