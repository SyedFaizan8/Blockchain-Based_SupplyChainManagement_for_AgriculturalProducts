import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home.jsx";
import Home from "../src/components/Home.jsx";
import { AuthLayout } from "./components/index.js";
import Login from "./components/Login.jsx";
import Signup from "./pages/Signup";
import {
  Cart,
  Orders,
  Profile,
  ProductDetails,
  ProductList,
} from "./components/Customer/index.js";
import {
  Farmer,
  FarmerHome,
  CropRegisteration,
  MidtermVerify,
  OrdersFrom,
  PickUpCourier,
  RequestCertification,
} from "./components/Farmer/index.js";
import {
  Authority,
  AuthorityHome,
  CropValidation,
  FinalCertification,
  MidtermVerification,
  NewApplication,
} from "./components/Authority/index.js";
// import ProductDetails from "./components/testing/ProductDetails.jsx";
// import ProductList from "./components/testing/ProductList.jsx";

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

      // here starts for the customer

      {
        path: "/productList",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <ProductList />
          </AuthLayout>
        ),
      },
      {
        path: "/Cart",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <Cart />
          </AuthLayout>
        ),
      },
      {
        path: "/Orders",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <Orders />
          </AuthLayout>
        ),
      },
      {
        path: "/Profile",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <Profile />
          </AuthLayout>
        ),
      },

      // here starts farmer routes

      {
        path: "/farmer",
        element: (
          <AuthLayout requiredRole="farmer" authentication={false}>
            <Farmer />
          </AuthLayout>
        ),
        children: [
          {
            path: "/farmer",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <FarmerHome />
              </AuthLayout>
            ),
          },
          {
            path: "/farmer/crop-registration",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <CropRegisteration />
              </AuthLayout>
            ),
          },

          {
            path: "/farmer/midterm-verify",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <MidtermVerify />
              </AuthLayout>
            ),
          },
          {
            path: "/farmer/request-certification",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <RequestCertification />
              </AuthLayout>
            ),
          },
          {
            path: "/farmer/orders-from",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <OrdersFrom />
              </AuthLayout>
            ),
          },
          {
            path: "/farmer/pick-up-fromcourier",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <PickUpCourier />
              </AuthLayout>
            ),
          },
        ],
      },

      // here starts authority routes

      {
        path: "/authority",
        element: (
          <AuthLayout requiredRole="authority" authentication={true}>
            <Authority />
          </AuthLayout>
        ),
        children: [
          {
            path: "/authority",
            element: (
              <AuthLayout requiredRole="authority" authentication={true}>
                <AuthorityHome />
              </AuthLayout>
            ),
          },
          {
            path: "/authority/crop-validation",
            element: (
              <AuthLayout requiredRole="authority" authentication={true}>
                <ProductList />
              </AuthLayout>
            ),
          },
          {
            path: "/authority/crop-validation/:id",
            element: (
              <AuthLayout requiredRole="authority" authentication={true}>
                <ProductDetails />
              </AuthLayout>
            ),
          },
          {
            path: "/authority/midterm-verification",
            element: (
              <AuthLayout requiredRole="authority" authentication={true}>
                <MidtermVerification />
              </AuthLayout>
            ),
          },
          {
            path: "/authority/final-certification",
            element: (
              <AuthLayout requiredRole="authority" authentication={true}>
                <FinalCertification />
              </AuthLayout>
            ),
          },
        ],
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
