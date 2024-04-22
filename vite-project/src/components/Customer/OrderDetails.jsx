import React, { useEffect, useState } from "react";
import FinalProduct from "../../Customhooks/finalProducts.jsx";
import { Header, Footer } from "../index.js";
import { FaRupeeSign } from "react-icons/fa";
import Timeline from "./Timeline.jsx";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const { fetchProducts } = FinalProduct();
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts();
      setProducts(result);
    };
    fetchData();
  }, []);

  const product = products.find((p) => p.id == location.state.order.productId);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Header />

      <div className="flex place-content-center w-full bg-[#D8F3DC]">
        <div className="grid grid-cols-2 w-5/6">
          <div>
            <img
              src={`/crops/${product.productName}.jpg`}
              alt="image"
              className="bg-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center p-4">
            <div className="font-bold text-2xl">{product.productName}</div>
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
              <div className="text-xl ">{(product.price).toString()}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-medium">{(product.quantity).toString()} </div>
              <div>items</div>
            </div>
          </div>
        </div>
      </div>
      <Timeline product={product} order={location.state.order} />
      <Footer />
    </div>
  );
};

export default OrderDetails;