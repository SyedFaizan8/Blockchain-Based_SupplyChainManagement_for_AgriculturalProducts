import Button from "../Button.jsx";
import Input from "../Input.jsx";
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
                    <label htmlFor="farmerName" className="font-bold">
                      Farmer Name
                    </label>
                    <Input
                      className="bg-green-100"
                      id="farmerName"
                      placeholder="Farmer Name"
                      {...register("farmerName", {
                        required: true,
                      })}
                    />
                    {errors.desiredprice && (
                      <span className="text-red-500">
                        Pls enter all details
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
                        Pls enter all details
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
                      placeholder="Enter crop quantity"
                      {...register("cropquantity", {
                        required: true,
                      })}
                    />
                    {errors.cropquantity && (
                      <span className="text-red-500">
                        Pls enter all details
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropquality" className="font-bold">
                      Crop quality
                    </label>
                    <Input
                      className="bg-green-100"
                      id="cropquality"
                      placeholder=" Enter crop quality"
                      {...register("cropquality", {
                        required: true,
                      })}
                    />
                    {errors.cropquality && (
                      <span className="text-red-500">
                        Pls enter all details
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
                      placeholder="Desired Price"
                      {...register("desiredprice", {
                        required: true,
                      })}
                    />
                    {errors.desiredprice && (
                      <span className="text-red-500">
                        Pls enter all details
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
