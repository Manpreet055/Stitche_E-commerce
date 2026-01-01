import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserDataProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loadingState } = useUser();
  if (loadingState) {
    return null; // or a spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
