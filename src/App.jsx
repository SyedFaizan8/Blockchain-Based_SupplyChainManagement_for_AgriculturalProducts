// import { useSate } from "react";
// import { useDispatch } from "react-redux";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
// import HeaderSample from "./components/Header/HeaderSample.jsx";
// import Login from "./components/Login.jsx";
import { Outlet } from "react-router-dom";

function App() {
  // const [loading, setLoading] = useSate(true);
  // const dispatch = useDispatch;

  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            TODO: <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
