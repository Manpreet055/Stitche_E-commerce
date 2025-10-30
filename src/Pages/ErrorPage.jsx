import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col w-full">
      <iframe
        className="h-[50vh]  w-full"
        src="https://lottie.host/embed/7581a093-bd87-4b50-9e68-c6701d0a288a/7XNSOyRomw.lottie"
      ></iframe>
      <h3 className="text-2xl font-semibold text-neutral-500">
        Page Not Found..
      </h3>
      <div className="w-fit flex gap-4 mt-4 py-6">
        <button
          onClick={() => handleNavigate("/")}
          className="primary-bg text-white px-6 py-4 hover-transition rounded-2xl shadow-2xl text-lg"
        >
          Go To Home
        </button>
        <button
          onClick={() => handleNavigate(-1)}
          className="primary-bg text-white px-6 py-4 hover-transition rounded-2xl shadow-2xl text-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
