/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Spinner } from "react-bootstrap";


const PrivateRoute = ({ children }) => {
  const { user , loading} = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <Spinner animation="border" variant="info" />
}
  if (user) {
    return children;
  }

  return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;