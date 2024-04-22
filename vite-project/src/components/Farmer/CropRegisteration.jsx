import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";
import useCrop from "../../Customhooks/crops.jsx";
import Select from "../Select.jsx";

const CropRegisteration = () => {

  const { cropRegister } = useCrop();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ cropname, area, cultivation, timeforharvest, yieldperacre }) => {
    await cropRegister(cropname, area, cultivation, timeforharvest, yieldperacre);
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
              <div className="font-bold text-4xl">Crop Registeration</div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropname" className="font-bold">
                      Crop Name
                    </label>
                    <Select
                      options={[
                        "Rice",
                        "Wheat",
                        "Maize",
                        "Barley",
                        "Millet",
                        "Oats",
                        "Lentils",
                        "Chickpeas",
                        "Kidneybeans",
                        "Mungbeans",
                        "Blackgram",
                        "Soybeans",
                        "Peas",
                        "Quinoa",
                      ]}
                      id="cropname"
                      className="mb-4"
                      {...register("cropname", { required: true })}
                    />
                    {errors.cropname && (
                      <span className="text-red-500">
                        Please enter the crop name
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="area" className="font-bold">
                      Address
                    </label>
                    <Input
                      className="bg-green-100"
                      id="area"
                      placeholder="Enter your address"
                      {...register("area", {
                        required: true,
                      })}
                    />
                    {errors.area && (
                      <span className="text-red-500">
                        Please provide your address
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cultivation" className="font-bold">
                      Specify the area of cultivation in acres
                    </label>
                    <Input
                      className="bg-green-100"
                      id="cultivation"
                      placeholder="Enter area in acres"
                      {...register("cultivation", {
                        required: true,
                      })}
                    />
                    {errors.cultivation && (
                      <span className="text-red-500">
                        Please specify the area of cultivation in acres
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="timeforharvest" className="font-bold">
                      Expected month of harvest
                    </label>
                    <Input
                      type="date"
                      className="bg-green-100"
                      id="timeforharvest"
                      placeholder="Enter here"
                      {...register("timeforharvest", {
                        required: true,
                      })}
                    />
                    {errors.timeforharvest && (
                      <span className="text-red-500">
                        Please enter the expected month
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="yieldperacre" className="font-bold">
                      Expected yield per acre
                    </label>
                    <Input
                      className="bg-green-100"
                      id="yieldperacre"
                      placeholder="Please enter the expected yield per acre in kilograms"
                      {...register("yieldperacre", {
                        required: true,
                      })}
                    />
                    {errors.yieldperacre && (
                      <span className="text-red-500">
                        Please provide the expected yield per acre in kilograms
                        to proceed
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex my-4">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CropRegisteration;
