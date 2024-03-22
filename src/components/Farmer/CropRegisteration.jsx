import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";

const CropRegisteration = () => {
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
        className="w-screen h-screen blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className=" z-10 relative overflow-hidden">
        <div className="flex justify-center py-5  px-12 items-center w-screen">
          <div className="w-full">
            <div className="flex justify-center items-center text-xl">
              <div>Crop Registeration</div>
              {/* <CardDescription>
                Deploy your new project in one-click.
              </CardDescription> */}
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropname">Crop Name</label>
                    <Input
                      id="cropname"
                      placeholder="Enter crop name"
                      {...register("cropname", {
                        required: true,
                      })}
                    />
                    {errors.cropname && <span>error in crop name</span>}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="area">Plot/Land Address</label>
                    <Input
                      id="area"
                      placeholder="Enter Address"
                      {...register("area", {
                        required: true,
                      })}
                    />
                    {errors.area && <span>error in area</span>}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cultivation">
                      Specify the area of cultivation in acres
                    </label>
                    <Input
                      id="cultivation"
                      placeholder="Enter no of acres of cultivation area"
                      {...register("cultivation", {
                        required: true,
                      })}
                    />
                    {errors.cultivation && <span>error in cultivation</span>}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="timeforharvest">
                      Time required till harvest
                    </label>
                    <Input
                      id="timeforharvest"
                      placeholder="Enter here"
                      {...register("timeforharvest", {
                        required: true,
                      })}
                    />
                    {errors.timeforharvest && (
                      <span>error in timeforharvest</span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="yieldperacre">
                      Expected yield per Acre
                    </label>
                    <Input
                      id="yieldperacre"
                      placeholder="Enter here"
                      {...register("yieldperacre", {
                        required: true,
                      })}
                    />
                    {errors.yieldperacre && <span>error in yieldperacre </span>}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="info">Aditional info</label>
                    <Input
                      id="info"
                      placeholder="Additional info"
                      {...register("info", {
                        required: true,
                      })}
                    />
                    {errors.info && <span>error in info</span>}
                  </div>
                </div>
                <br />
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
