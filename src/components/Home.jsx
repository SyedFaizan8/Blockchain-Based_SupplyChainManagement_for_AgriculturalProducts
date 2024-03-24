import React from "react";
import { MdAgriculture } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { PiPottedPlantFill } from "react-icons/pi";
import { PiTreeEvergreenFill } from "react-icons/pi";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        {/* this is the banner section */}
        <div className="relative h-[26rem]">
          <img
            src="images/main-bg.jpg"
            alt="Banner"
            className="z-0 w-full absolute"
          />
          <div className="absolute z-10  justify-center items-center w-full flex h-3/4">
            <div className="font-bold text-8xl text-white tracking-widest">
              THIS IS AGROCHAIN
            </div>
          </div>
        </div>

        {/* this is the about section */}
        <div className="flex flex-row relative h-[500px] pb-6">
          <div className="flex flex-col justify-center px-10 gap-y-10">
            <div className="font-bold text-4xl leading-10">About us</div>

            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              reprehenderit fuga distinctio cum dicta, culpa asperiores ratione
              totam nulla itaque incidunt, eius magni ipsam et esse ea expedita
              nisi adipisci dolor in sequi dolores vero! Consequatur, iure id.
              Dignissimos a corrupti harum explicabo quam, expedita aut
              distinctio eos error sint.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              reprehenderit fuga distinctio cum dicta, culpa asperiores ratione
              totam nulla itaque incidunt, eius magni ipsam et esse ea expedita
              nisi adipisci dolor in sequi dolores vero! Consequatur, iure id.
              Dignissimos a corrupti harum explicabo quam, expedita aut
              distinctio eos error sint.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              reprehenderit fuga distinctio cum dicta, culpa asperiores ratione
              totam nulla itaque incidunt, eius magni ipsam et esse ea expedita
              nisi adipisci dolor in sequi dolores vero! Consequatur, iure id.
              Dignissimos a corrupti harum explicabo quam, expedita aut
              distinctio eos error sint.
            </div>
          </div>
          <img className="h-full" src="images/about.png" alt="about us" />
        </div>
        {/* Why us starts here */}
        <div>
          <div className="overflow-x-hidden">
            <div className="p-5 bg-[#52B788] grid place-items-center font-bold text-white text-6xl">
              Why choose us
            </div>
            <div className="grid grid-cols-3 grid-rows-2 w-screen place-items-center h-96">
              <div className="bg-[#52B788] w-full h-full grid place-items-center">
                <div className="flex gap-2">
                  <MdAgriculture className="text-5xl text-white bg-orange-500 rounded-full p-2" />{" "}
                  <div className="flex justify-center items-center text-white font-bold text-2xl">
                    Modern Farming
                  </div>
                </div>
                <div className="px-6 pb-6 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quasi ad ratione quisquam. Praesentium enim quis
                  placeat aliquam in ratione, incidunt consequuntur esse. Alias,
                  fuga.
                </div>
              </div>
              <div className=" w-full h-full grid place-items-center p-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                suscipit corporis eveniet architecto magnam sit ab in
                consequatur adipisci quod.
              </div>

              <div className="bg-[#52B788] w-full h-full grid place-items-center">
                <div className="flex flex-row gap-2">
                  <IoIosCall className="text-5xl text-white bg-orange-500 rounded-full p-2" />{" "}
                  <div className="flex justify-center items-center text-white font-bold text-2xl">
                    24/7 Support
                  </div>
                </div>
                <div className="px-6 pb-6 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quasi ad ratione quisquam. Praesentium enim quis
                  placeat aliquam in ratione, incidunt consequuntur esse. Alias,
                  fuga.
                </div>
              </div>
              <div className="bg-[#52B788] w-full h-full grid place-items-center">
                <div className="flex flex-row gap-2">
                  <PiPottedPlantFill className="text-5xl text-white bg-orange-500 rounded-full p-2" />{" "}
                  <div className="flex justify-center items-center text-white font-bold text-2xl">
                    100% Organic
                  </div>
                </div>
                <div className="px-6 pb-6 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quasi ad ratione quisquam. Praesentium enim quis
                  placeat aliquam in ratione, incidunt consequuntur esse. Alias,
                  fuga.
                </div>
              </div>
              <div className="relative w-full h-full grid place-items-center">
                <img
                  className="absolute h-full bg-cover"
                  src="images/feature.png"
                />
              </div>
              <div className="bg-[#52B788] w-full h-full grid place-items-center">
                <div className="flex flex-row gap-2">
                  <PiTreeEvergreenFill className="text-5xl text-white bg-orange-500 rounded-full p-2" />{" "}
                  <div className="flex justify-center items-center text-white font-bold text-2xl">
                    Green
                  </div>
                </div>
                <div className="px-6 pb-6 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quasi ad ratione quisquam. Praesentium enim quis
                  placeat aliquam in ratione, incidunt consequuntur esse. Alias,
                  fuga.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
