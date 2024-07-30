import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";
import useCrop from "../../Customhooks/crops.jsx";

const CropRegisteration = () => {
  const { cropRegister } = useCrop();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch, // new thing
  } = useForm();

  const [secondSelectOptions, setSecondSelectOptions] = useState([]);

  const firstSelectValue = watch("category");

  const updateSecondSelectOptions = (firstSelectValue) => {
    if (firstSelectValue === "grains") {
      setSecondSelectOptions([
        "Rice",
        "Wheat",
        "Maize",
        "Barley",
        "Millet",
        "Oats",
        "Quinoa",
      ]);
    } else if (firstSelectValue === "legumes") {
      setSecondSelectOptions([
        "Lentils",
        "Chickpeas",
        "Kidneybeans",
        "Mungbeans",
        "Blackgram",
        "Soybeans",
        "Peas",
      ]);
    } else {
      setSecondSelectOptions([]);
    }
  };

  //date input
  const currentMonthYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 3; // Adding 3 to select the month +2
    let yearOffset = 0;

    if (month > 12) {
      month -= 12;
      yearOffset = 1;
    }

    return `${year + yearOffset}-${month.toString().padStart(2, "0")}`;
  };

  const onSubmit = async ({
    cropname,
    area,
    category,
    cultivation,
    timeforharvest,
    yieldperacre,
  }) => {
    await cropRegister(
      cropname,
      category,
      area,
      cultivation,
      timeforharvest,
      yieldperacre
    );
  };

  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-full h-full blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className=" z-10 relative  overflow-hidden">
        <div className="flex justify-center py-5  px-12 items-center w-full">
          <div className="w-4/5">
            <div className="flex justify-center items-center text-xl">
              <div className="font-bold text-4xl">Crop Registeration</div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="category" className="font-bold">
                      Category
                    </label>
                    <Controller
                      name="category"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Please select an option" }}
                      render={({ field }) => (
                        <select
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            updateSecondSelectOptions(e.target.value);
                          }}
                          className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                        >
                          <option value="">Please select Category</option>
                          <option value="grains">Grains</option>
                          <option value="legumes">Legumes</option>
                        </select>
                      )}
                      {...register("category", {
                        required: true,
                      })}
                    />
                    {errors.category && (
                      <span className="text-red-500">
                        Please enter the category
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropname" className="font-bold">
                      Crop Name
                    </label>
                    <Controller
                      name="cropname"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select
                          {...field}
                          className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                        >
                          {secondSelectOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                      {...register("cropname", {
                        required: true,
                      })}
                    />
                    {errors.cropname && (
                      <span className="text-red-500">
                        Please select category then crop
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
                  {/* <div className="flex flex-col space-y-1.5">
                    <label htmlFor="category" className="font-bold">
                      Category
                    </label>
                    <Input
                      className="bg-green-100"
                      id="category"
                      placeholder="Enter your address"
                      {...register("category", {
                        required: true,
                      })}
                    />
                    {errors.area && (
                      <span className="text-red-500">Please Category</span>
                    )}
                  </div> */}
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
                    <Controller
                      name="timeforharvest"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="month"
                          id="timeforharvest"
                          className="bg-green-100"
                          min={currentMonthYear()}
                          {...register("timeforharvest", {
                            required: true,
                          })}
                        />
                      )}
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
