import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Select } from "./index";
import { useForm } from "react-hook-form";
import useGetusers from "../Customhooks/getUsers";
import { useSelector } from "react-redux";
import useWallet from "../Customhooks/connectWallet";

function Login() {
  const { register, handleSubmit } = useForm();
  const [getCustomer, getFarmer, getAuthority, getCourier] = useGetusers();
  const connectWallet = useWallet()
  const account = useSelector(state => state.addContract.address);

  if (account === null) {
    window.ethereum.request({ method: "eth_requestAccounts" }).then(() => {
      connectWallet();
    });
  }

  async function getUser({ role, password }) {
    if (role === "customer") {
      await getCustomer(password);
    } else if (role === "farmer") {
      await getFarmer(password);
    } else if (role === "authority") {
      await getAuthority(password);
    } else {
      await getCourier(password);
    }
  }

  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-screen h-screen blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="z-10 relative flex items-center justify-center w-full h-screen">
        <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
              <img src="/images/logo.png" className="w-3/4" alt="Logo" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <form onSubmit={handleSubmit(getUser)} className="mt-8">
            <div className="space-y-5">
              <Select
                options={["customer", "farmer", "authority", "courier"]}
                label="Role"
                className="mt-4"
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
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
