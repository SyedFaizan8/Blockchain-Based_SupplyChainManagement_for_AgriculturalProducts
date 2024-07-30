import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import { useForm } from "react-hook-form";
import FinalProduct from "../Customhooks/finalProducts.jsx";

const Home = () => {
  const scroll = useSelector((state) => state.scroll.Section);
  const dispatch = useDispatch();
  const userData = JSON.parse(window.localStorage.getItem("userData"));
  const authRole = userData == null ? null : userData.role;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { fetchProducts } = FinalProduct();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchProducts();
        let filterProduct = result.filter((product) => product.show == true);
        setProducts(filterProduct);
      } catch (error) {
        //TODO: show Error
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    return () => {};
  }, []);

  const scrollsubmit = () => {
    dispatch(Section("home"));
  };

  const onSubmit = async (data) => {};

  useEffect(() => {
    if (scroll) {
      scroller.scrollTo(scroll, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
      dispatch(Section(null));
    }
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

        {/* About Us*/}
        <Element name="about-us">
          <div className="flex flex-row relative h-[500px] mb-6">
            <div className="flex flex-col justify-center px-10 gap-y-10 ">
              <div className="font-bold text-4xl leading-10 ">ABOUT US</div>
              <div>
                Blockchain technology holds promise for promoting green
                initiatives through its capacity to enhance transparency and
                accountability. By enabling peer-to-peer energy trading,
                blockchain facilitates the decentralized exchange of renewable
                energy, empowering individuals to participate in the green
                economy directly. Additionally, blockchain's transparent
                tracking of carbon emissions and offsets provides a reliable
                framework for monitoring and verifying environmental impact
                reduction efforts, ensuring that businesses and organizations
                uphold their commitments to sustainability. Furthermore,
                blockchain's role in transparent supply chain management allows
                consumers to make informed decisions about
                environmentally-friendly products, incentivizing businesses to
                adopt more sustainable practices. Overall, blockchain has the
                potential to drive significant progress towards a greener and
                more sustainable future by fostering transparency,
                accountability, and innovation in various sectors.
              </div>
              {/* <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                reprehenderit fuga distinctio cum dicta, culpa asperiores
                ratione totam nulla itaque incidunt, eius magni ipsam et esse ea
                expedita nisi adipisci dolor in sequi dolores vero! Consequatur,
                iure id. Dignissimos a corrupti harum explicabo quam, expedita
                aut distinctio eos error sint.
              </div> */}
              <div>
                Blockchain technology offers a transformative solution for
                advancing green initiatives by enhancing transparency and
                accountability in environmental efforts. Through decentralized
                peer-to-peer energy trading, blockchain enables the efficient
                exchange of renewable energy, empowering individuals to
                participate in sustainable energy practices.
              </div>
            </div>
            <img className="h-full" src="images/about.png" alt="about us" />
          </div>
        </Element>

        {/* how it works */}

        <Element name="how-it-works">
          <div className="overflow-x-hidden bg-[#D8F3DC]">
            <div className="py-8 bg-[#52B788] grid  place-items-center font-bold text-white text-6xl">
              HOW IT WORKS
            </div>
            <div className="grid grid-cols-3 grid-rows-2 w-screen place-items-center">
              <div className="bg-[#52B788] w-full h-full grid place-items-center">
                <div className="flex gap-2">
                  <MdAgriculture className="text-5xl text-white bg-orange-500 rounded-full p-2" />
                  <div className="flex justify-center items-center text-white font-bold text-2xl">
                    Modern Farming
                  </div>
                </div>
                <div className="px-6 pb-6">
                  Discover the future of farming at AgroChain. Our innovative
                  techniques include precision farming, vertical farming, and
                  hydroponics. With smart solutions and sustainable practices,
                  we're cultivating a greener, more abundant tomorrow. Join us
                  in shaping the future of agriculture.
                </div>
              </div>
              <div className=" w-full h-full grid place-items-center p-6 bg-[#D8F3DC]">
                Discover how blockchain technology is transforming agriculture
                supply chain management. Our solution ensures transparency,
                traceability, and trust from farm to fork, enhancing food
                safety, reducing fraud, and increasing efficiency. Explore
                real-world use cases, see our features in action, and learn how
                we help businesses comply with regulations. Join us in
                revolutionizing agriculture with blockchain technology.
              </div>
              <div className="bg-[#52B788] w-full h-full grid place-items-center">
                <div className="flex flex-row gap-2">
                  <IoIosCall className="text-5xl text-white bg-orange-500 rounded-full p-2" />{" "}
                  <div className="flex justify-center items-center text-white font-bold text-2xl">
                    24/7 Support
                  </div>
                </div>
                <div className="px-6 pb-6">
                  we understand that farming doesn't adhere to regular business
                  hours. That's why we offer 24/7 assistance to support you
                  whenever you need it. Whether you have questions about crop
                  management, equipment troubleshooting, or need immediate
                  assistance, our team is here to help, day or night. With our
                  round-the-clock support, you can farm with confidence, knowing
                  that help is always just a call away.
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
                  we're committed to delivering nothing but the best nature has
                  to offer. That's why all our products are 100% organic. From
                  seed to harvest, we prioritize natural methods and sustainable
                  practices. No synthetic pesticides, no GMOs—just pure,
                  wholesome goodness straight from the earth. Trust us to
                  provide you with the highest quality organic produce for a
                  healthier, happier lifestyle.
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
                  <PiTreeEvergreenFill className="text-5xl text-white bg-orange-500 rounded-full p-2" />
                  <div className="flex justify-center items-center text-white font-bold text-2xl">
                    Green
                  </div>
                </div>
                <div className="px-6 pb-6 ">
                  we're proud to be green pioneers in the agricultural industry.
                  Our commitment to sustainability runs deep, from minimizing
                  carbon footprints to maximizing environmental stewardship.
                  Through renewable energy, water conservation, and eco-friendly
                  practices, we're cultivating a greener tomorrow, one harvest
                  at a time. Join us in our mission to preserve the planet for
                  future generations while enjoying the freshest, most
                  responsibly grown produce available.
                </div>
              </div>
            </div>
          </div>
        </Element>

        {/* Contact us */}
        <Element name="contact-us">
          <div className="flex justify-center items-center flex-col  bg-[#D8F3DC] w-full py-10">
            <div className="text-4xl text-black font-bold m-2">CONTACT US</div>
            <div className="flex justify-center items-center flex-col w-4/5 ">
              <div className="font-bold text-xl mb-5">
                Please Feel Free To Contact Us
              </div>

              <div className="grid grid-cols-3 h-auto w-full">
                <div className=" bg-[#52B788] col-span-2 rounded-l-lg">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-center items-center gap-4 m-4 p-2"
                  >
                    <Input
                      type="text"
                      placeholder="Your Name"
                      id="your_name"
                      className=" p-2 rounded-lg"
                      {...register("your_name")}
                    />
                    {errors.your_name && (
                      <span className="text-red-500">Pls enter your name</span>
                    )}
                    <Input
                      type="text"
                      placeholder="Your Email"
                      id="email"
                      className=" p-2 rounded-lg"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500">Pls enter your email</span>
                    )}
                    <Input
                      type="text"
                      placeholder="Subject"
                      id="subject"
                      className="w-3/4 p-2 rounded-lg"
                      {...register("subject")}
                    />
                    <Input
                      type="text"
                      placeholder="Message"
                      id="message"
                      className=" p-2 h-32 text-xl rounded-lg"
                      {...register("message", {
                        required: true,
                      })}
                    />
                    {errors.message && (
                      <span className="text-red-500">
                        Pls enter your message
                      </span>
                    )}
                    <Button
                      type="submit"
                      className=" w-full p-2 rounded-lg bg-orange-500"
                    >
                      Send Message
                    </Button>
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
                        <div>thus@gnauk.com</div>
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
