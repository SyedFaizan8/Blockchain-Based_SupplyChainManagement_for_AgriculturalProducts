import React, { useState } from "react";

const Signup = () => {
  const [isChecked, setisChecked] = useState(true);
  const handlechange = () => {
    setisChecked(!isChecked);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("images/Bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950"
    >
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-9 py-6 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4 dark:text-yellow-500">
         !Welcome to AgriGO
         </h1>
         <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
         SignUP
        </h1>
        <form>
          <div className="mb-4">
          <label
              htmlFor="email"
              className="block text-sm font-medium text-stone-600-700 dark:text-gray-300 mb-2"
            >
              User Name
            </label>
            <div/>
            <input
              type="Name"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your full name"
              required
            />
            </div>
            <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-stone-600-700 dark:text-gray-300 mb-2" >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
            <a
              to="#"
              className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            </a>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              
            <label
              href=""
              className="text-xs text-indigo-500 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
            >
              Sign In
            </label>
            </div>
            
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
             bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
