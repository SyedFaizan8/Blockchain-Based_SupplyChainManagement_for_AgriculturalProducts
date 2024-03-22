import Button from "../Button.jsx";
import Input from "../Input.jsx";
import { useForm } from "react-hook-form";

const RequestCertification = () => {
  const { register, handleSubmit } = useForm();
  const create = async (data) => {
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
              <div>Requesting For Certification</div>
            </div>
            <div>
              <form onSubmit={handleSubmit(create)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropname">Crop Name</label>
                    <Input
                      id="cropname"
                      placeholder="Enter crop name"
                      {...register("cropname", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropquality">Crop Quality</label>
                    <Input
                      id="cropquality"
                      placeholder=""
                      {...register("cropquality", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropquantity">Crop Quantity</label>
                    <Input
                      id="cropquantity"
                      placeholder=""
                      {...register("cropquatity", { required: true })}
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="desiredprice"> Desired Price</label>
                    <Input
                      id="desiredprice"
                      placeholder=""
                      {...register("desiredprice", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="info">Aditional info</label>
                    <Input
                      id="info"
                      placeholder="Additional info"
                      {...register("info", { required: true })}
                    />
                  </div>
                </div>
                <div className="flex">
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
