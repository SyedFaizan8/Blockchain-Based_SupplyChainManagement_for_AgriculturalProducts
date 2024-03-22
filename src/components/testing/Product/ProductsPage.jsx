import React from "react";

export function ProductsPage({}) {
  return (
    <div className="bg-red-100">
      <div className="">
        {/* <h className="flex justify-center text-6xl underline p-9 bg-white"></h> */}
        <img
          src="https://c4.wallpaperflare.com/wallpaper/816/62/518/digital-art-nature-trees-mountains-wallpaper-preview.jpg"
          alt="img"
          className="absolute  w-full h-96 rounded-md lg:h-[300px]"
        />
        <h className=" relative flex justify-center text-8xl text-white py-24">
          Products
        </h>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 m-6 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-xl md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="flex justify-center text-lg font-semibold">
                Nike Airmax v
              </h1>
              <p className="mt-3 text-sm text-gray-600"></p>
              <div className="mt-4">
                <span className="flex justify-center rounded-ful  text-xl font-semibold text-gray-900">
                  Price : 60
                </span>
              </div>
              <div className="mt-3 flex items-center space-x-2"></div>
              <div className="mt-5 flex items-center space-x-2"></div>
              <button
                type="button"
                className=" w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
