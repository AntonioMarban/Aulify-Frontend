import React from "react";
import { Navigate } from "react-router-dom";

const MasterProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" />;
  }

  if (role !== "master") {
    return <Navigate to="/home" />;
  }

  return children;
};

export default MasterProtectedRoute;
