import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider, useSelector } from "react-redux";
import store from "./store/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import FarmerHome from "./components/Farmer/FarmerHome.jsx";
import AuthorityHome from "./components/Authority/AuthorityHome.jsx";
// import CropValidation from "./components/Authority/CropValidation.jsx";
// import FinalCertification from "./components/Authority/FinalCertification.jsx";
// import MidtermVerification from "./components/Authority/MidtermVerification.jsx";
// import NewApplication from "./components/Authority/NewApplication.jsx";
// import CropRegisteration from "./components/Farmer/CropRegisteration.jsx";
// import MidtermVerify from "./components/Farmer/MidtermVerify.jsx";
// import OrdersFrom from "./components/Farmer/OrdersFrom.jsx";
// import PickUpCourier from "./components/Farmer/PickUpCourier.jsx";
// import RequestCertification from "./components/Farmer/RequestCertification.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/farmer-home",
        element: (
          <AuthLayout authentication requiredRole="farmer">
            <FarmerHome />
          </AuthLayout>
        ),
      },
      {
        path: "/authority-home",
        element: (
          <AuthLayout authentication requiredRole="authority">
            <AuthorityHome />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
