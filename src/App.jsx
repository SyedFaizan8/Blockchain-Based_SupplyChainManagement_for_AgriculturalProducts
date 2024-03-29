import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";

// import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  // const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const logedin = localStorage.getItem("logedin");
  //   if (logedin) {
  //     dispatch(login({ logedin }));
  //   } else {
  //     dispatch(logout());
  //   }
  //   setLoading(false);
  // }, []);

  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Outlet />
      </div>
    </div>
  );
}
// !loading ? () : null;
export default App;
