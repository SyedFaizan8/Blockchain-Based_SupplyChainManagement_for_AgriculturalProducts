import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Cart = () => {
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
          Cart
        </div>
      </div>

      <div className="h-full w-full ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem
        consectetur, optio, neque incidunt aliquam eius ex impedit voluptas
        dolores nihil veniam rerum doloribus consequatur!
      </div>
      <Footer />
    </>
  );
};

export default Cart;
