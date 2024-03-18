import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
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
      navigate("/");
    }

    if (requiredRole && authRole !== requiredRole) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authRole, navigate, authentication, requiredRole]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
