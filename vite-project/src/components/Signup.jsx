import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Logo, Select } from "./index.js";
import { useForm } from "react-hook-form";
import useCreate from "../Customhooks/createUsers.jsx";
import { useSelector } from "react-redux";
import useWallet from "../Customhooks/connectWallet.jsx";

function Signup() {
  const [createCustomer, createFarmer, createAuthority, createCourier] = useCreate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();
  const connectWallet = useWallet();

  const account = useSelector(state => state.addContract.address);

  if (account === null) {
    window.ethereum.request({ method: "eth_requestAccounts" }).then(() => {
      connectWallet();
    })
  }

  async function create({ role, name, email, password }) {
    if (role === "customer") {
      await createCustomer(role, name, email, password);
    } else if (role === "farmer") {
      await createFarmer(role, name, email, password);
    } else if (role === "authority") {
      await createAuthority(role, name, email, password);
    } else {
      await createCourier(role, name, email, password);
    }
  }

  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-screen h-screen blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="z-10 relative flex items-center justify-center">
        <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
              <img src="/images/logo.png" className="w-3/4" alt="Logo" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error} )</p>}

          <form onSubmit={handleSubmit(create)}>
            <div className="space-y-5">
              <Select
                options={["customer", "farmer", "authority", "courier"]}
                label="Role"
                className="mb-4"
                {...register("role", { required: true })}
              />
              <Input
                label="ETH Address: "
                value={account || ""}
                placeholder="Please connect to wallet"
                {...register("ETHAddress", {
                  required: true,
                })}
              />
              <Input
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name", {
                  required: true,
                })}
              />
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
