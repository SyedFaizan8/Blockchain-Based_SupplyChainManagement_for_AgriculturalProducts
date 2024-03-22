import React from "react";
import Multicarsoul from "./Multicarsoul";

function Homepage({ pname }) {
  return (
    <>
      <section class="bg-orange-50 dark:bg-orange-50">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-stone-500">
              Mission we are working on
            </h1>
            <p class="max-w-2xl mb-6 font-semibold text-slate-800   lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Our mission is to transform the agriculture industry by
              implementing blockchain technology to optimize the supply chain
              management process. By leveraging blockchain's transparency,
              security, and efficiency, we aim to create a seamless and
              trustworthy ecosystem that benefits all stakeholders involved in
              the agriculture product supply chain.
            </p>

            <div className="flex justify-center">
              <a
                href="#"
                class="inline-flex justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-red-400 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Get Started with us ---
              </a>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://media.istockphoto.com/id/966855552/photo/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=jW1pVhnH6UbOIQvfpQDc3Q5OxZTD0WSANSTFG3Nmzjc="
              alt="mockup"
              className=" rounded-xl"
            />
          </div>
        </div>
      </section>

      <div className=" bg-orange-100">
        <div className="flex justify-center text-6xl p-5 font-bold font-serif no-underline hover:underline  decoration-green-700">
          Choose From The Best
        </div>

        <div className="flex justify-end contant-end">
          <button className="content-end  underline  text-3xl p-5 font-bold text-red-700 hover:bg-green-300 rounded-3xl">
            Click for more details---
          </button>
        </div>

        <div className=" relative flex justify-evenly">
          <img
            src="https://media.istockphoto.com/id/966855552/photo/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=jW1pVhnH6UbOIQvfpQDc3Q5OxZTD0WSANSTFG3Nmzjc="
            alt="mockup"
            className="size-80 rounded-xl m-5"
          />

          {/* text on img */}
          <div className="absolute bottom-0 left-0 right-0 text-white p-5 items-end">
            <p className="flex  justify-start px-36 py-9 text-2xl font-extrabold ">
              Quality Products
            </p>
          </div>

          <img
            src="https://media.istockphoto.com/id/966855552/photo/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=jW1pVhnH6UbOIQvfpQDc3Q5OxZTD0WSANSTFG3Nmzjc="
            alt="mockup"
            className="size-80 rounded-xl m-5"
          />

          {/* text on img */}
          <div className="absolute bottom-0 left-0 right-0 text-white p-5 items-end">
            <p className="flex  justify-center px-96 py-9 text-2xl font-extrabold ">
              Quality Standarts
            </p>
          </div>

          <img
            src="https://media.istockphoto.com/id/966855552/photo/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=jW1pVhnH6UbOIQvfpQDc3Q5OxZTD0WSANSTFG3Nmzjc="
            alt="mockup"
            className=" size-80 rounded-xl m-5"
          />

          {/* text on img */}
          <div className="absolute bottom-0 left-0 right-0 text-white p-5 items-end">
            <p className="flex  justify-end px-40 py-9 text-2xl font-extrabold ">
              Quality Certified
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCTS PART OF HOME PAGE */}

      <div className="min-h-96 bg-orange-50">
        <div className="">
          <div className="flex justify-center py-8 text-6xl bg-red-50 font-extrabold text-red-700 underline">
            OUR PRODUCTS
          </div>
          <div className="flex justify-end">
            <button className=" from-neutral-950 text-4xl underline hover:text-red-400 font-extrabold rounded-xl mb-5 bg-red-50">
              Clik for more --
            </button>
          </div>
        </div>
        <Multicarsoul />
      </div>
    </>
  );
}

export default Homepage;
