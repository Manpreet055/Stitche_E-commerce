import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/handleUser";
import AsyncBoundary from "../ui/AsyncBoundary";
import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../ui/BackButton";
import ToastComp from "../ui/ToastComp";
import { useAuth } from "../context/AuthProdvider";
const LoginPage = () => {
  const navigate = useNavigate();
  const { refetchUser } = useAuth();
  const [toastText, setToastText] = useState();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const handleForm = async (data) => {
    try {
      const result = await loginUser(data, setLoadingState, setError);
      localStorage.setItem("userId", result?.user?._id);
      setToastText(result.msg);
      await refetchUser(); // Add this: Refetch user details immediately after login
      navigate("/"); // Optionally navigate after refetch
    } catch (err) {
      setToastText(err.msg);
    }
  };

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  return (
    <div className="w-full relative h-screen flex justify-center items-center">
      <div className="absolute top-10 left-10">
        <BackButton text="Go Back" navPath="/" />
      </div>
      {toastText && <ToastComp text={toastText || error} position="top-10" />}
      <div className="w-full max-w-lg h-fit px-6 py-10 border border-gray-400 rounded-2xl">
        <h2 className="text-center text-3xl font-semibold">Login</h2>
        <h4 className="text-gray-500 text-center mt-4 mb-10">
          Enter your email and password to login
        </h4>
        <form
          onSubmit={handleSubmit(handleForm)}
          className="p-4 flex flex-col h-full "
        >
          <label htmlFor="email" className="font-medium px-2 my-2">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter Your Email Address"
            className="border border-gray-400 p-2 rounded-xl shadow-md"
          />
          <label htmlFor="password" className=" font-medium px-2 mb-2 mt-6 ">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter Your Email Address"
            className="border border-gray-400 p-2 rounded-xl shadow-md"
          />
          <a href="#" className="my-4 font-semibold underline">
            Forgot Password?
          </a>

          <button
            className="btn-primary bg-accent mt-6 text-white"
            type="submit"
          >
            LogIn
          </button>
          <h3 className="text-gray-500 text-center">
            Don't have an account?{" "}
            <NavLink to="/signup" className="font-medium underline text-black">
              Sign Up
            </NavLink>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
