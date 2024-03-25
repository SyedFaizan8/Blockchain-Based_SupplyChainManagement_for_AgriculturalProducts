import React from "react";
import { products } from "./products.js";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/authority/crop-validation/${product.id}`}>
            {product.id}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
