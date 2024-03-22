import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../store/scrollSlice.js";
import { Element, scroller } from "react-scroll";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.scroll.Section);

  useEffect(() => {
    if (selector) {
      scroller.scrollTo(selector, {
        duration: 500,
        delay: 100,
        smooth: "easeInOutQuart",
      });
      dispatch(Section(null));
    }
  }, [selector, dispatch]);

  return (
    <>
      <Header />
      <Element name="product-section">
        <h2>Product Section</h2>
        <p>This is the product section of the homepage.</p>
      </Element>
      <Footer />
    </>
  );
};

export default Home;
