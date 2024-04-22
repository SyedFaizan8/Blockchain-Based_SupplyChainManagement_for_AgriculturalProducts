import Input from "../Input.jsx";
import Button from "../Button.jsx";
import { useForm } from "react-hook-form";
import Midterm from "../../Customhooks/Midterm.jsx";

const MidtermVerify = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { midTermRegister } = Midterm();

  const onSubmit = async ({id,progress,months }) => {
    await midTermRegister(id,progress,months);
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
              <div className="font-bold text-4xl">Midterm Verification</div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="id" className="font-bold">
                      Crop ID
                    </label>
                    <Input
                      className="bg-green-100"
                      id="id"
                      placeholder="Enter Crop ID"
                      {...register("id", {
                        required: true,
                      })}
                    />
                    {errors.id && (
                      <span className="text-red-500">
                        Please enter the farmer's name
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="Progress" className="font-bold">
                      Progress
                    </label>
                    <Input
                      className="bg-green-100"
                      id="progress"
                      placeholder="Enter Progress of your Crop"
                      {...register("progress", {
                        required: true,
                      })}
                    />
                    {errors.progress && (
                      <span className="text-red-500">
                        Please enter the area in acres
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
                      id="months"
                      placeholder="Enter here"
                      {...register("months", {
                        required: true,
                      })}
                    />
                    {errors.months && (
                      <span className="text-red-500">
                        Please enter the expected month
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

export default MidtermVerify;