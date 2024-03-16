// import { useSate } from "react";
// import { useDispatch } from "react-redux";
// import Login from "./components/Login.jsx";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  // const [loading, setLoading] = useSate(true);
  // const dispatch = useDispatch;

  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
