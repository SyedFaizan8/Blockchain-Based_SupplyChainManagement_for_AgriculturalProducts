import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer, Button } from "../index.js";
import { toast } from "react-toastify";
import Timeline from "./Timeline.jsx";
import FinalProduct from "../../Customhooks/finalProducts.jsx";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice.js";

const ProductDetail = () => {

  const { fetchProducts } = FinalProduct();
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts();
      setProducts(result);
    }
    fetchData();
  }, [])

  const product = products.find(p => p.id === id);

  const handleAddToCart = (product) => {
    if (product.quantity == 0) {
      toast.error("Product is out of Stack");
    } else {
      dispatch(addItem(product));
    }
  };

  if (!product) {
    return (
      <>
        <div className="min-h-screen">
          <Header />
          <div className="flex place-content-center text-9xl font-bold">
            Product not found
          </div>
          <Footer />
        </div>
      </>
    );
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
              <div className="text-xl ">{(product.price).toString()} ETH</div>
            </div>
            <div className="flex gap-1">
              <div className="font-medium">{(product.quantity).toString()} </div>
              <div>items available</div>
            </div>
            <Button
              className="hover:bg-blue-400"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <Timeline product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetail;