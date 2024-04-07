import { Input, Button, Select } from "../index.js";
import { useForm } from "react-hook-form";

const RequestCertification = () => {
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
        <div className="flex justify-center py-5  px-12 items-center w-full">
          <div className="w-4/5">
            <div className="flex justify-center items-center text-xl">
              <div className="font-bold text-4xl">Certification</div>
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
                      Crop Name
                    </label>
                    <Input
                      className="bg-green-100"
                      id="cropname"
                      placeholder="Enter crop name"
                      {...register("cropname", {
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
                    <label htmlFor="cropquantity" className="font-bold">
                      Crop Quantity
                    </label>
                    <Input
                      className="bg-green-100"
                      id="cropquantity"
                      placeholder="Please enter the crop quantity in kilograms"
                      {...register("cropquantity", {
                        required: true,
                      })}
                    />
                    {errors.cropquantity && (
                      <span className="text-red-500">
                        Please enter the crop quantity in kilograms
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropquality" className="font-bold">
                      Crop Quality
                    </label>

                    <Select
                      options={["A", "B", "C"]}
                      label="Quality"
                      id="cropquality"
                      className="bg-green-100"
                      {...register("cropquality", {
                        required: true,
                      })}
                    />
                    {errors.cropquality && (
                      <span className="text-red-500">
                        Please choose the crop quality grade
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="desiredprice" className="font-bold">
                      Desired Price
                    </label>
                    <Input
                      className="bg-green-100"
                      id="desiredprice"
                      placeholder="Please enter the desired price"
                      {...register("desiredprice", {
                        required: true,
                      })}
                    />
                    {errors.desiredprice && (
                      <span className="text-red-500">
                        Please input the desired price
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

export default RequestCertification;
