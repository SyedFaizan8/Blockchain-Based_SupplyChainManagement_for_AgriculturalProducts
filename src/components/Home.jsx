import React, { useEffect } from "react";
import { MdAgriculture } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { PiPottedPlantFill } from "react-icons/pi";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Element, scroller } from "react-scroll";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { TiArrowSortedUp } from "react-icons/ti";
import { Section } from "../store/scrollSlice.js";

const Home = () => {
  const scroll = useSelector((state) => state.scroll.Section);
  const dispatch = useDispatch();

  const scrollsubmit = () => {
    dispatch(Section("home"));
  };

  useEffect(() => {
    scroller.scrollTo(scroll, {
      smooth: true,
      duration: 500,
    });
    dispatch(Section(null));
  }, [scroll]);

  return (
    <>
      <div className="bg-white">
        <Header />
        {/* this is the banner section */}
        <Element name="home">
          <div className="relative h-[26rem] ">
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
        </Element>

        {/* this is the about section */}
        <Element name="about-us">
          <div className="flex flex-row relative h-[500px] mb-6">
            <div className="flex flex-col justify-center px-10 gap-y-10">
              <div className="font-bold text-4xl leading-10">About us</div>

              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                reprehenderit fuga distinctio cum dicta, culpa asperiores
                ratione totam nulla itaque incidunt, eius magni ipsam et esse ea
                expedita nisi adipisci dolor in sequi dolores vero! Consequatur,
                iure id. Dignissimos a corrupti harum explicabo quam, expedita
                aut distinctio eos error sint.
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                reprehenderit fuga distinctio cum dicta, culpa asperiores
                ratione totam nulla itaque incidunt, eius magni ipsam et esse ea
                expedita nisi adipisci dolor in sequi dolores vero! Consequatur,
                iure id. Dignissimos a corrupti harum explicabo quam, expedita
                aut distinctio eos error sint.
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                reprehenderit fuga distinctio cum dicta, culpa asperiores
                ratione totam nulla itaque incidunt, eius magni ipsam et esse ea
                expedita nisi adipisci dolor in sequi dolores vero! Consequatur,
                iure id. Dignissimos a corrupti harum explicabo quam, expedita
                aut distinctio eos error sint.
              </div>
            </div>
            <img className="h-full" src="images/about.png" alt="about us" />
          </div>
        </Element>

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
              <div className=" w-full h-full grid place-items-center p-6 bg-[#D8F3DC]">
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
                <div className="px-6 pb-6  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quasi ad ratione quisquam. Praesentium enim quis
                  placeat aliquam in ratione, incidunt consequuntur esse. Alias,
                  fuga.
                </div>
              </div>
              <div className="relative w-full h-full grid place-items-center">
                <div className="bg-[#D8F3DC] w-full h-full flex justify-center items-center">
                  <img
                    className="absolute h-full bg-cover"
                    src="images/feature.png"
                  />
                </div>
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

        {/* Contact us */}
        <Element name="contact-us">
          <div className="flex justify-center items-center flex-col  bg-[#D8F3DC] w-full py-6">
            <div className="text-xl text-[#1B4332] font-bold m-2">
              Contact us
            </div>
            <div className="flex justify-center items-center flex-col w-4/5 ">
              <div className="font-bold text-4xl">Please Feel Free To</div>
              <div className="font-bold text-4xl mb-3">Contact Us</div>
              <div className="grid grid-cols-3 h-auto w-full">
                <div className=" bg-[#52B788] col-span-2 rounded-l-lg">
                  <form className="flex flex-col justify-center items-center gap-4 m-4 p-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-3/4 p-2 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="w-3/4 p-2 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-3/4 p-2 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Message"
                      className="w-3/4 p-2 rounded-lg"
                    />
                    <button
                      type="submit"
                      className=" w-3/4 p-2 rounded-lg bg-orange-500"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="flex justify-center items-center flex-col rounded-r-lg bg-[#1B4332] gap-y-3 text-white">
                  <div className="font-semibold text-2xl">Get in touch</div>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-1">
                      <FaLocationDot className="bg-orange-500 rounded-full text-black text-4xl p-1 m-4" />
                      <MdEmail className="bg-orange-500 rounded-full text-black text-4xl p-1 m-4" />
                      <IoCall className="bg-orange-500 rounded-full text-black text-4xl p-1 m-4" />
                    </div>
                    <div className="col-span-4">
                      <div className="flex flex-col my-2">
                        <div>Our Office</div>
                        <div>124 street, chitradurga</div>
                      </div>

                      <div className="flex flex-col my-2">
                        <div>Email us</div>
                        <div>thus@gnauk.con</div>
                      </div>

                      <div className="flex flex-col my-2">
                        <div>Call us</div>
                        <div>+91 984554646</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Footer />
      </div>

      <TiArrowSortedUp
        className="text-5xl bg-orange-500 fixed bottom-2 right-2 z-30 rounded-full "
        onClick={scrollsubmit}
      />
    </>
  );
};

export default Home;
