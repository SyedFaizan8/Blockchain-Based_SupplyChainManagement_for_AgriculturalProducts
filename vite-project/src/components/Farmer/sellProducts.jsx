import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";
import useProduct from "../../Customhooks/products.jsx";

const SellProducts = () => {

  const { productRegister } = useProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ product_name, description, price, category ,image}) => {
    await productRegister(product_name, description, price, category);
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
          <div className="w-4/5">
            <div className="flex justify-center items-center text-xl">
              <div className="font-bold text-4xl">Sell Products</div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="product_name" className="font-bold">
                      Product Name
                    </label>
                    <Input
                      className="bg-green-100"
                      id="product_name"
                      placeholder="Enter crop name"
                      {...register("product_name", {
                        required: true,
                      })}
                    />
                    {errors.product_name && (
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
                      placeholder="Enter Description"
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
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="price" className="font-bold">
                      Price
                    </label>
                    <Input
                      className="bg-green-100"
                      id="price"
                      placeholder="Price"
                      {...register("price", {
                        required: true,
                      })}
                    />
                    {errors.price && (
                      <span className="text-red-500">
                        Pls enter all details
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="category" className="font-bold">
                      Category
                    </label>
                    <Input
                      className="bg-green-100"
                      id="category"
                      placeholder="category"
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
                  {/* <label htmlFor="image" className="font-bold">
                      Upload Image
                    </label>
                  <Input
                    type="file"
                    className="bg-green-100"
                    id="image"
                    placeholder="image"
                    {...register("image", {
                      required: true,
                    })}
                  />
                  {errors.image && (
                    <span className="text-red-500">
                      Pls enter all details
                    </span>
                  )} */}
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

export default SellProducts;
