import React from "react";
import { useParams } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const FarmerProducts = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const productId = product.id;
    const findProduct = timeline.find((p) => p.id === productId);

    return (
        <div>
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
                            <div>items</div>
                        </div>
                    </div>
                </div>
            </div>
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
                                        {findProduct.cropRegistration}
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
                            <div className="col-span-4 w-full h-full"></div>
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
                                        {findProduct.cropApproved}
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Stack 3 --> */}
                            <div className="col-span-4 w-full h-full ">
                                <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                                    <h1 className="text-white text-xl font-medium py-2">
                                        Request of Midterm Verification on
                                    </h1>
                                    <p className="text-gray-100  text-md">
                                        {findProduct.midTerm}
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
                            <div className="col-span-4 w-full h-full"></div>

                            {/* <!-- Stack 4 --> */}
                            <div className="col-span-4 w-full h-full"></div>
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
                                        {findProduct.midTermApproved}
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Stack 5 --> */}
                            <div className="col-span-4 w-full h-full ">
                                <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                                    <h1 className="text-white text-xl font-medium py-2">
                                        Request of Certification on
                                    </h1>
                                    <p className="text-gray-100 text-md">
                                        {findProduct.finalCertification}
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
                            <div className="col-span-4 w-full h-full"></div>

                            {/* <!-- Stack 6 --> */}
                            <div className="col-span-4 w-full h-full"></div>
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
                                        {findProduct.certificationApproved}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerProducts;