import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Post from "./pages/Post.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import FarmerHome from "./components/Farmer/FarmerHome.jsx";
// // import CropRegisteration from "./components/Farmer/CropRegisteration.jsx";
// import MidtermVerify from "./components/Farmer/MidtermVerify.jsx";
// import RequestCertification from "./components/Farmer/RequestCertification.jsx";
import AuthorityHome from "./components/Authority/AuthorityHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AuthorityHome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/post/:slug",
        element: <Post />,
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
