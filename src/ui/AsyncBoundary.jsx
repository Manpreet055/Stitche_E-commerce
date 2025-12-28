// ...existing code...
import { Spinner } from "flowbite-react";
import React from "react";
import { motion } from "framer-motion";
import StitcheLoader from "../ui/StithceLoader";

const AsyncBoundary = ({
  loadingState = false,
  errorMessage,
  errorState,
  customMessage,
}) => {
  const error = errorMessage ?? errorState;

  if (!loadingState && !error && !customMessage) return null;

  return (
    <div className="h-screen text-theme w-full flex justify-center items-center ">
      <div className="text-xl">
        {loadingState ? (
          <StitcheLoader />
        ) : error ? (
          error
        ) : (
          (customMessage ?? "Something Went Wrong")
        )}
      </div>
    </div>
  );
};

export default AsyncBoundary;
