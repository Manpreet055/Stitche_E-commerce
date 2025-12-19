import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AsyncBoundary from "../ui/AsyncBoundary";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import BackButton from "../ui/BackButton";
import ToastComp from "../ui/ToastComp";

import { useAuthentication } from "../context/AuthProdvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useUser } from "../context/UserDataProvider";
import { Popover } from "flowbite-react";

const LoginPage = () => {
  const api = useAxiosPrivate();
  const { setAccessToken } = useAuthentication();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [toastText, setToastText] = useState();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const handleForm = async (data) => {
    try {
      setLoadingState(true);

      const token = await api.post(`/users/login`, data);
      setAccessToken(token);
      setToastText(token.msg);
      navigate(from, { replace: true });
    } catch (err) {
      setToastText(err.message);
    } finally {
      setLoadingState(false);
    }
  };

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  return (
    <div className="w-full theme text-theme relative h-screen flex justify-center items-center">
      <div className="absolute top-10 left-2 sm:left-10">
        <BackButton text="Go Back" navPath="/" />
      </div>
      {toastText && <ToastComp text={toastText || error} position="top-10" />}
      <div className="w-full max-w-lg h-fit px-6 py-10 border border-gray-400 rounded-2xl">
        <h2 className="text-center text-3xl font-semibold">Login</h2>
        <h4 className="text-gray-500 text-center mt-4 mb-2">
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
            className="border border-gray-400 px-2 py-3 text-sm sm:text-md rounded-xl shadow-md"
          />
          <label htmlFor="password" className=" font-medium px-2 mb-2 mt-6 ">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter Your Email Address"
            className="border border-gray-400 px-2 py-3 text-sm sm:text-md rounded-xl shadow-md"
          />
          <Popover
            aria-labelledby="default-popover"
            content={
              <div className="w-64 text-sm theme px-3 py-2">
                <p>This Feature is coming soon</p>
              </div>
            }
          >
            <button className="underline text-nowrap w-fit mt-3 hover-transition">
              Forget Password ?
            </button>
          </Popover>

          <button
            className="btn-primary theme-alt text-theme-alt my-6 "
            type="submit"
          >
            LogIn
          </button>
          <h3 className="text-gray-500 text-center">
            Don't have an account?{" "}
            <NavLink to="/signup" className="font-medium underline">
              Sign Up
            </NavLink>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
