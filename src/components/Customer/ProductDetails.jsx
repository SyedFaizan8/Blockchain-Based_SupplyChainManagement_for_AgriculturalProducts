// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../products.js";

const ProductDetail = () => {
  const { id } = useParams(); // Extracting the product id from URL params
  const product = products.find((p) => p.id === parseInt(id)); // Finding the product by id

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default ProductDetail;
