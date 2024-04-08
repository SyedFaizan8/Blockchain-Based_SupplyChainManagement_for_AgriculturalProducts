import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";
import {
  PopoverContext,
  usePopover,
} from "@material-tailwind/react/components/Popover/PopoverContext.js";
import { Popover } from "@headlessui/react";
// import PopupMessage from "../PopupMessage.jsx";

const PickUpCourier = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-full h-full blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className=" z-10 relative overflow-hidden">
        <div className="flex justify-center py-5  px-12 items-center w-full">
          <div className="w-4/5">
            <div className="flex justify-center items-center text-xl">
              <div className="font-bold text-4xl m-5">Courier Pick Up </div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="farmer_name" className="font-bold">
                      Farmer Name
                    </label>
                    <Input
                      className="bg-green-100"
                      id="farmer_name"
                      placeholder="Enter farmer's name"
                      {...register("farmer_name", {
                        required: true,
                      })}
                    />
                    {errors.farmer_name && (
                      <span className="text-red-500">
                        Please enter the farmer's name
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropname" className="font-bold">
                      From
                    </label>
                    <Input
                      type="address"
                      className="bg-green-100"
                      id="from"
                      placeholder="address"
                      {...register("from", {
                        required: true,
                      })}
                    />
                    {errors.cropname && (
                      <span className="text-red-500">
                        Please enter the crop name
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="area" className="font-bold">
                      Product Name
                    </label>
                    <Input
                      type="name"
                      className="bg-green-100"
                      id="area"
                      placeholder="Enter your address"
                      {...register("to", {
                        required: true,
                      })}
                    />
                    {errors.area && (
                      <span className="text-red-500">Address</span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cultivation" className="font-bold">
                      Pick Up date
                    </label>
                    <Input
                      type="date"
                      className="bg-green-100"
                      id="time"
                      placeholder="date"
                      {...register("pickupdate", {
                        required: true,
                      })}
                    />
                    {errors.cultivation && (
                      <span className="text-red-500"></span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="timeforharvest" className="font-bold">
                      Pick up Time
                    </label>
                    <Input
                      type="time"
                      className="bg-green-100"
                      id="timeforharvest"
                      placeholder="12:00"
                      {...register("weigth", {
                        required: true,
                      })}
                    />
                    {errors.timeforharvest && (
                      <span className="text-red-500">12:00</span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="yieldperacre" className="font-bold">
                      weigth
                    </label>
                    <Input
                      type="weigth"
                      className="bg-green-100"
                      id="yieldperacre"
                      placeholder="In kg's"
                      {...register("yieldperacre", {
                        required: true,
                      })}
                    />
                    {errors.yieldperacre && (
                      <span className="text-red-500"></span>
                    )}
                  </div>
                </div>

                <div className="flex my-4">
                  <Button type="submit">Submit</Button>
                  {/* <Popover 

                    buttonText="Thank You"
                    message="Your form has been submitted successfully."
                  /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickUpCourier;
