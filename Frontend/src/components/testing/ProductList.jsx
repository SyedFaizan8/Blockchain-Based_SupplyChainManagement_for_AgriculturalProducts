import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCrop from "../../Customhooks/crops.jsx";

const ProductList = () => {

  const { getCrops } = useCrop();
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCrops();
        setCrops(result);
      } catch (error) {
        //TODO: show Error 
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

    return () => { };
  }, []);


  return (
    <div>
      {crops.map((crop) => (
        <div key={crop.id}>
          <Link to={`/authority/crop-validation/${crop.id}`}>
            {crop.id}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
