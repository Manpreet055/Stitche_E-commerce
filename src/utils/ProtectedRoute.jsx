import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserDataProvider";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
