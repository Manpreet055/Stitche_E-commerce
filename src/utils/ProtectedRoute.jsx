import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const userId = localStorage.getItem("userId");

  if (!userId || userId === "undefined")
    return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
