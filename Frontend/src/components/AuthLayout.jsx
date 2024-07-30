import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function Protected({
  children,
  authentication = true,
  requiredRole,
}) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  let userData = JSON.parse(window.localStorage.getItem("userData"));

  const authStatus = userData !== null ? true : false;
  const authRole = userData !== null ? userData["role"] : null;

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      switch (authRole) {
        case "customer":
          navigate("/");
          break;
        case "farmer":
          navigate("/farmer");
          break;
        case "authority":
          navigate("/authority");
          break;
        case "courier":
          navigate("/courier");
          break;
        default:
          navigate("/");
          break;
      }
    }
    setLoader(false);
  }, [authStatus, authRole, navigate, authentication, requiredRole]);

  return loader ? <Loader /> : <>{children}</>;
}
