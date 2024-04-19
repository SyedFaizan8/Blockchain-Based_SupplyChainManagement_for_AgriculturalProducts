import Button from "../Button.jsx";
import Input from "../Input.jsx";
import { useForm } from "react-hook-form";
import Certificate from "../../Customhooks/certificate.jsx";

const RequestCertification = () => {
  const {reqCertificate} = Certificate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({id,cropquality,cropquantity,category,desiredprice,description}) => {
    await reqCertificate(id,cropquality,cropquantity,category,desiredprice,description);
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
                    <label htmlFor="crop ID" className="font-bold">
                      Crop ID
                    </label>
                    <Input
                      className="bg-green-100"
                      id="id"
                      placeholder="Enter crop quantity"
                      {...register("id", {
                        required: true,
                      })}
                    />
                    {errors.id && (
                      <span className="text-red-500">
                        Pls enter all details
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropquality" className="font-bold">
                      Crop Quality
                    </label>
                    <Input
                      className="bg-green-100"
                      id="cropquality"
                      placeholder="Enter crop quality"
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
                    <label htmlFor="cropquantity" className="font-bold">
                      Crop quantity
                    </label>
                    <Input
                      className="bg-green-100"
                      id="cropquantity"
                      placeholder=" Enter crop quantity"
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
                    <label htmlFor="Category" className="font-bold">
                      Category
                    </label>
                    <Input
                      className="bg-green-100"
                      id="category"
                      placeholder=" Enter Category"
                      {...register("category", {
                        required: true,
                      })}
                    />
                    {errors.category && (
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

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="description" className="font-bold">
                      Description
                    </label>
                    <Input
                      className="bg-green-100"
                      id="description"
                      placeholder="Description"
                      {...register("description", {
                        required: true,
                      })}
                    />
                    {errors.description && (
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