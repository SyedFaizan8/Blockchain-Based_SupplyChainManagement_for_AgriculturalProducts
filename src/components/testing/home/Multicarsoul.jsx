import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Multicarsoul({ pname, price }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="">
      <h1 className="flex justify-center text-6xl p-5 font-bold font-sans underline">
        Scroll for more
      </h1>

      {/* Multi line carousel for sliding the products part of the page */}

      <div className="p-2 m-">
        <Carousel responsive={responsive}>
          {/* images of products */}

          <div className="flex-col">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/29/13/01/rice-3505977_640.jpg"
              alt="mockup"
              className="rounded-lg p-3"
            />
            <div className="bg-slate-600 rounded-lg mx-5 hover:bg-green-500">
              <h1 className="flex justify-center text-2xl text-zinc-50">
                Rice
              </h1>
              <p className="flex justify-center text-2xl text-zinc-50">
                Price : 60
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/06/29/13/01/rice-3505977_640.jpg"
              alt="mockup"
              className="rounded-lg p-3 hx-"
            />
            <div className="bg-slate-600 rounded-lg mx-5 hover:bg-green-500">
              <h1 className="flex justify-center text-2xl text-zinc-50">
                Rice
              </h1>
              <p className="flex justify-center text-2xl text-zinc-50">
                Price : 59
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/06/29/13/01/rice-3505977_640.jpg"
              alt="mockup"
              className="rounded-lg p-3"
            />
            <div className="bg-slate-600 rounded-lg mx-5 hover:bg-green-500">
              <h1 className="flex justify-center text-2xl text-zinc-50">
                Rice
              </h1>
              <p className="flex justify-center text-2xl text-zinc-50">
                Price : 59
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/06/29/13/01/rice-3505977_640.jpg"
              alt="mockup"
              className="rounded-lg p-3"
            />
            <div className="bg-slate-600 rounded-lg mx-5 hover:bg-green-500">
              <h1 className="flex justify-center text-2xl text-zinc-50">
                Rice
              </h1>
              <p className="flex justify-center text-2xl text-zinc-50">
                Price : 59
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/06/29/13/01/rice-3505977_640.jpg"
              alt="mockup"
              className="rounded-lg p-3"
            />
            <div className="bg-slate-600 rounded-lg mx-5 hover:bg-green-500">
              <h1 className="flex justify-center text-2xl text-zinc-50">
                Rice
              </h1>
              <p className="flex justify-center text-2xl text-zinc-50">
                Price : 59
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/06/29/13/01/rice-3505977_640.jpg"
              alt="mockup"
              className="rounded-lg p-3"
            />
            <div className="bg-slate-600 rounded-lg mx-5 hover:bg-green-500">
              <h1 className="flex justify-center text-2xl text-zinc-50">
                Rice
              </h1>
              <p className="flex justify-center text-2xl text-zinc-50">
                Price : 59
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
