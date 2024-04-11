import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function Protected({
  children,
  authentication = true,
  requiredRole,
}) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const authRole = useSelector((state) => state.auth.role);

  useEffect(() => {
    //TODO: make it more easy to understand

    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }

    //let authValue = authStatus === true ? true : false

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
