// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../products.js";
import { Header, Footer, Button } from "../index.js";
import { FaRupeeSign } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams(); // Extracting the product id from URL params
  const product = products.find((p) => p.id === parseInt(id)); // Finding the product by id

  if (!product) {
    return (
      <>
        <div className="min-h-screen">
          <Header />
          <div>Product not found</div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <div>
      <Header />
      {/* <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <img src={product.imageUrl} alt={product.name} /> */}

      <div className="flex place-content-center w-full bg-[#D8F3DC]">
        <div className="grid grid-cols-2 w-5/6">
          <div>
            <img
              src="/images/feature.png"
              alt="image"
              className="bg-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center p-4">
            <div className="font-bold text-2xl">{product.name}</div>
            <div>
              <div className="font-medium">Description</div>
              <div>{product.description}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-medium">Category :</div>
              <div>{product.category}</div>
            </div>
            <div className="flex items-center ">
              <div className="font-medium">Price : </div>
              <FaRupeeSign className="text-sm relative top-[1px]" />
              <div className="text-xl ">{product.price}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-medium">{product.quantity} </div>
              <div>items available</div>
            </div>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
