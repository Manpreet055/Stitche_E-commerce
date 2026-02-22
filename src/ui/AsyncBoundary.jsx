// ...existing code...
import React from "react";
import StitcheLoader from "../ui/StithceLoader";

const AsyncBoundary = ({
  loader = <StitcheLoader />,
  loadingState = false,
  errorMessage,
  errorState,
  customMessage,
}) => {
  const error = errorMessage ?? errorState;

  if (!loadingState && !error && !customMessage) return null;

  return (
    <div className="h-screen text-theme w-full flex justify-center items-center ">
      <div className="sm:text-xl">
        {loadingState
          ? loader
          : error
            ? error
            : (customMessage ?? "Something Went Wrong")}
      </div>
    </div>
  );
};

export default AsyncBoundary;
