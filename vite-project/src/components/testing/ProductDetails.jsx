// ProductDetail.js
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import useCrop from "../../Customhooks/crops";

const ProductDetail = () => {
  const { getCrops } = useCrop();
  let [crops, setCrops] = useState([]);

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
  const { id } = useParams(); // Extracting the product id from URL params
  crops = crops.find((p) => p.id === id); // Finding the product by id

  if (!crops) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Crop Name: {crops.cropName}</h2>
      <h2>Farmer Name: {crops.farmerName}</h2>
      <p>ETH_Address: {crops.ETHAddress}</p>
      <img src={crops.imageUrl} alt={crops.name} />
    </div>
  );
};

export default ProductDetail;
