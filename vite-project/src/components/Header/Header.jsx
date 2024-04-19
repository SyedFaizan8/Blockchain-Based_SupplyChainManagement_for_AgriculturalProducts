import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Section } from "../../store/scrollSlice.js";
import Button from "../Button.jsx";
import { useDispatch,useSelector } from "react-redux";
import { removeAllItem } from "../../store/cartSlice.js";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = JSON.parse(window.localStorage.getItem("userData"));
  const authStatus = userData !== null ? true : false;
  const authRole = userData !== null ? userData["role"] : null;
  const [localeData, setLocalData] = useState(userData);
  const cart = useSelector((state) => state.cart.items);
  const items = cart.length;

  function logout(){
    window.localStorage.removeItem("userData");
    setLocalData(null);
    dispatch(removeAllItem());
    navigate("/");
  }

  const handleClick = (sectionId) => {
    dispatch(Section(sectionId));
  };


  const handleClickProduct = (sectionId) => {
    if (authRole === "customer") navigate("/productList");
    else handleClick(sectionId);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-[#D8F3DC] border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="#" className="flex items-center">
            <img src="/images/logo.png" className="mr-3 h-12" alt="Logo" />
          </Link>

          <div className="flex items-center lg:order-2">
            {authStatus && (
              <Button onClick={() => dispatch(logout())} className="mx-3">
                Logout
              </Button>
            )}
            {!authStatus && (
              <Link
                to="/login"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Login
              </Link>
            )}
            {authRole === "customer" && (
              <div>
                <Link
                  to="/profile"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Profile
                </Link>
                {items === 0 ? (
                  <Link
                    to="/cart"
                    className="text-white bg-orange-700 relative hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Cart
                  </Link>
                ) : (
                  <Link
                    to="/cart"
                    className="text-white bg-orange-700 relative hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 lg:px-4 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    <span>Cart </span>
                    <span>({items})</span>
                    <span className="rounded-full   bg-sky-500  w-3 h-3 absolute -right-1 -top-1">
                      <span className="absolute rounded-full h-4 w-4 animate-ping bg-green-500"></span>
                    </span>
                  </Link>
                )}
                <Link
                  to="/orders"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Orders
                </Link>
              </div>
            )}
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {(!authStatus || authRole === "customer") && (
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    className=" block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700"
                    onClick={() => handleClick("home")}
                  >
                    Home
                  </Link>
                </li>
                {authRole === "customer" && (
                  <li>
                    <button
                      className=" block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700"
                      onClick={() => handleClickProduct("products")}
                    >
                      Products
                    </button>
                  </li>
                )}
                <li>
                  <Link
                    to="/"
                    className=" block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700"
                    onClick={() => handleClick("about-us")}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className=" block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700"
                    onClick={() => handleClick("how-it-works")}
                  >
                    How it works
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className=" block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700"
                    onClick={() => handleClick("contact-us")}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
