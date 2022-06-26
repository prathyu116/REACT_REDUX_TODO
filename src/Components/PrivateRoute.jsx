import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
     var token = JSON.parse(localStorage.getItem("token"));
     var tokenAuth = localStorage.getItem("tokenauthor");

  if (!token) {
    return <Navigate to={"/login"} replace={true} />; //default is false....back adikkumbol backilekk povan
  }
  return children;
};

export default PrivateRoute;
