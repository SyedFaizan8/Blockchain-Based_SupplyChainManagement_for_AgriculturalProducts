import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useWallet from "./Customhooks/connectWallet";

function App() {
  const connectWallet = useWallet();

  useEffect(() => {
    connectWallet();
  }, [])

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
