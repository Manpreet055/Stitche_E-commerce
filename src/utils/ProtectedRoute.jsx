import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserDataProvider";
import { Spinner } from "flowbite-react";

const ProtectedRoute = ({ children }) => {
  const { user, loadingState } = useUser();
  if (loadingState && !user) {
    return (
      <div className="h-screen w-full grid place-items-center">
        <Spinner color="gray" />
      </div>
    );
  }
  if (!user && !loadingState) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
