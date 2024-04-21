import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import useCrop from "../../Customhooks/crops";
import Midterm from "../../Customhooks/Midterm";
import Certificate from "../../Customhooks/certificate";
import FinalProduct from "../../Customhooks/finalProducts";

const FarmerProducts = () => {
    const [crops, setCrops] = React.useState([]);
    const [midterms, setMidterm] = React.useState([]);
    const [certificates, setcertificate] = React.useState([]);
    const [Products, setProducts] = React.useState([]);

    const { getCrops } = useCrop();
    const { getMidTerms } = Midterm();
    const { getCertificate } = Certificate();
    const { fetchProducts } = FinalProduct();

    useEffect(() => {
        const fetchData = async () => {
            const crops = await getCrops();
            const midterm = await getMidTerms();
            const certificate = await getCertificate();
            const Products = await fetchProducts();

            setCrops(crops);
            setMidterm(midterm);
            setcertificate(certificate);
            setProducts(Products);
        }
        fetchData();
    }, []);

    const { id } = useParams();
    const crop = crops.find((p) => p.id === id);
    const midterm = midterms.find((p) => p.id === id) == undefined ? false : midterms.find((p) => p.id === id);
    const certificate = certificates.find((p) => p.id === id) == undefined ? false : certificates.find((p) => p.id === id);
    const Product = Products.find((p) => p.id === id);

    if (!crop) {
        return <>Loading...</>
    }

    return (
        <div>
            <div>
                <div className="h-auto w-full flex flex-col place-items-center bg-[#D8F3DC] p-4">
                    <div className="text-center text-5xl font-bold p-6">TIMELINE</div>
                    <div className="p-5 w-3/4 flex justify-center items-center">
                        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                            {/* <!-- Stack 1 --> */}
                            <div className="col-span-4 w-full h-full ">
                                <div className="w-full h-full bg-indigo-400 rounded-md p-3 ">
                                    <h1 className="text-white text-xl font-medium ">
                                        Crop Registered on
                                    </h1>
                                    <p className="text-gray-100 text-md">
                                        {crop.timeofApplied}
                                    </p>
                                </div>
                            </div>
                            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                <div className="h-1/2 self-end w-1 bg-indigo-300"></div>
                                <div className="w-1/2 left-0  h-1 bg-indigo-300 absolute"></div>
                                <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10  text-white text-center">
                                    1
                                </div>
                            </div>
                            <div className="col-span-4 w-full h-full"></div>

                            {/* <!-- Stack 2 --> */}
                            {crop.isApproved && <><div className="col-span-4 w-full h-full"></div>
                                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                    <div className="h-full w-1 bg-indigo-300"></div>
                                    <div className="w-1/2 right-0  h-1 bg-indigo-300 absolute"></div>
                                    <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                                        2
                                    </div>
                                </div>
                                <div className="col-span-4 w-full h-full ">
                                    <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                                        <h1 className="text-white text-xl font-medium py-2">
                                            Crop Approved By Authority on
                                        </h1>
                                        <p className="text-gray-100  text-md">
                                            {crop.timeofVerified}
                                        </p>
                                    </div>
                                </div></>}

                            {/* <!-- Stack 3 --> */}
                            {midterm && <><div className="col-span-4 w-full h-full ">
                                <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                                    <h1 className="text-white text-xl font-medium py-2">
                                        Request of Midterm Verification on
                                    </h1>
                                    <p className="text-gray-100  text-md">
                                        {midterm.timeofApplied}
                                    </p>
                                </div>
                            </div>
                                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                    <div className="h-full w-1 bg-indigo-300"></div>
                                    <div className="w-1/2 left-0  h-1 bg-indigo-300 absolute"></div>
                                    <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                                        3
                                    </div>
                                </div>
                                <div className="col-span-4 w-full h-full"></div></>}

                            {/* <!-- Stack 4 --> */}
                            {midterm.isApproved && <><div className="col-span-4 w-full h-full"></div>
                                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                    <div className="h-full w-1 bg-indigo-300"></div>
                                    <div className="w-1/2 right-0  h-1 bg-indigo-300 absolute"></div>
                                    <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                                        4
                                    </div>
                                </div>
                                <div className="col-span-4 w-full h-full ">
                                    <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                                        <h1 className="text-white text-xl font-medium py-2">
                                            Midterm Verification Approved By Authority on
                                        </h1>
                                        <p className="text-gray-100  text-md">
                                            {midterm.timeofVerified}
                                        </p>
                                    </div>
                                </div></>}

                            {/* <!-- Stack 5 --> */}
                            {certificate && <><div className="col-span-4 w-full h-full ">
                                <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                                    <h1 className="text-white text-xl font-medium py-2">
                                        Request of Certification on
                                    </h1>
                                    <p className="text-gray-100 text-md">
                                        {certificate.timeofApplied}
                                    </p>
                                </div>
                            </div>
                                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                    <div className="h-full w-1 bg-indigo-300"></div>
                                    <div className="w-1/2 left-0  h-1 bg-indigo-300 absolute"></div>
                                    <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                                        5
                                    </div>
                                </div>
                                <div className="col-span-4 w-full h-full"></div></>}

                            {/* <!-- Stack 6 --> */}
                            {certificate.isApproved && <><div className="col-span-4 w-full h-full"></div>
                                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                    <div className="h-1/2 self-start w-1 bg-indigo-300"></div>
                                    <div className="w-1/2 right-0  h-1 bg-indigo-300 absolute"></div>
                                    <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                                        6
                                    </div>
                                </div>
                                <div className="col-span-4 w-full h-full">
                                    <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                                        <h1 className="text-white text-xl font-medium py-2">
                                            Certification Approved on
                                        </h1>
                                        <p className="text-gray-100 text-md">
                                            {certificate.timeofVerified}
                                        </p>
                                    </div>
                                </div></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerProducts;