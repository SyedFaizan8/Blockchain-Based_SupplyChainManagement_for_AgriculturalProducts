import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { useForm } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const update = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <main>
        <img
          src="/images/Bg.jpg"
          className="w-screen h-screen blur-lg opacity-60 fixed z-0"
          alt=""
        />

        <div className=" z-10 relative overflow-hidden">
          <div className="flex justify-center py-5  px-12 items-center w-screen">
            <div className="w-full">
              <div className="flex justify-center items-center text-xl">
                <div>Profile</div>
              </div>
              <div>
                <form onSubmit={handleSubmit(update)}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="full-name">Full name</label>
                      <Input
                        id="full-name"
                        placeholder="Full name"
                        {...register("full-name", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="contact">Contact</label>
                      <Input
                        id="contact"
                        placeholder="Enter Contact number here"
                        {...register("contact", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <div>Address Details</div>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="house">
                        *House / Flat no / Building / Apartment
                      </label>
                      <Input
                        id="house"
                        placeholder="*House / Flat no / Building / Apartment"
                        {...register("house", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="street">Street or locality</label>
                      <Input
                        id="street"
                        placeholder="Enter Street or locality"
                        {...register("street", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="pincode">Pincode</label>
                      <Input
                        id="pincode"
                        placeholder="Enter Pincode"
                        {...register("pincode", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="city">City</label>
                      <Input
                        id="city"
                        placeholder="Enter City"
                        {...register("city", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="city">State</label>
                      <Input
                        id="state"
                        placeholder="Enter State"
                        {...register("state", {
                          required: true,
                        })}
                      />
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
      </main>
      <Footer />
    </>
  );
};

export default Profile;
