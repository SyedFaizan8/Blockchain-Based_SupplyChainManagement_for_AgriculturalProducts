import React from "react";

const Timeline = ({ product ,order}) => {
  return (
    <>
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
                <p className="text-gray-100 text-md">{product.cropRegistered}</p>
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
                <p className="text-gray-100  text-md">{product.cropApproved}</p>
              </div>
            </div>

            {/* <!-- Stack 3 --> */}
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">
                  Request of Midterm Verification on
                </h1>
                <p className="text-gray-100  text-md">{product.midTermRegistered}</p>
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
                <p className="text-gray-100  text-md">{product.midTermApproved}</p>
              </div>
            </div>

            {/* <!-- Stack 5 --> */}
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">
                  Request of Certification on
                </h1>
                <p className="text-gray-100 text-md">
                  {product.certRegistered}
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
              <div
                className={`${order == undefined ? "h-1/2 self-start" : "h-full"
                  }  w-1 bg-indigo-300`}
              ></div>
              <div className="w-1/2 right-0  h-1 bg-indigo-300 absolute"></div>
              <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                6
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">
                  Certification Approved on
                </h1>
                <p className="text-gray-100 text-md">
                  {product.certApproved}
                </p>
              </div>
            </div>
            {/* <!-- Stack 7 --> */}
            {order && (order.status === "Ordered" || order.status === "Picked" || order.status === "Delivered") &&(
              <>
                <div className="col-span-4 w-full h-full ">
                  <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                    <h1 className="text-white text-xl font-medium py-2">
                      Ordered On
                    </h1>
                    <p className="text-gray-100 text-md">{order.timeofOrdered}</p>
                  </div>
                </div>
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                  <div className="h-full w-1 bg-indigo-300"></div>
                  <div className="w-1/2 left-0  h-1 bg-indigo-300 absolute"></div>
                  <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                    7
                  </div>
                </div>
                <div className="col-span-4 w-full h-full"></div>
              </>
            )}

            {/* <!-- Stack 8 --> */}
            {order && (order.status === "Picked" || order.status === "Delivered") && (
              <>
                <div className="col-span-4 w-full h-full"></div>
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                  <div className="h-full w-1 bg-indigo-300"></div>
                  <div className="w-1/2 right-0  h-1 bg-indigo-300 absolute"></div>
                  <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                    8
                  </div>
                </div>
                <div className="col-span-4 w-full h-full ">
                  <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                    <h1 className="text-white text-xl font-medium py-2">
                      Pick Up From Farmer
                    </h1>
                    <p className="text-gray-100 text-md">
                      {order.timeofPicked}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* <!-- Stack 9 --> */}
            {(order && (order.status === "Delivered")) && (
              <>
                <div className="col-span-4 w-full h-full ">
                  <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                    <h1 className="text-white text-xl font-medium py-2">
                      Delivered at
                    </h1>
                    <p className="text-gray-100 text-md">{order.timeofDelivered}</p>
                  </div>
                </div>
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                  <div className="h-1/2 self-start w-1 bg-indigo-300"></div>
                  <div className="w-1/2 left-0  h-1 bg-indigo-300 absolute"></div>
                  <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                    9
                  </div>
                </div>
                <div className="col-span-4 w-full h-full"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;