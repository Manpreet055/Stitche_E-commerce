import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import BackButton from "../ui/BackButton";
import ToastComp from "../ui/ToastComp";
import { useAuthentication } from "../context/AuthProdvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useUser } from "../context/UserDataProvider";
import { Popover } from "flowbite-react";

const LoginPage = () => {
  const { refetchUser } = useUser();
  const api = useAxiosPrivate();
  const { setAccessToken } = useAuthentication();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [toastText, setToastText] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Clear toast after 3 seconds automatically
  useEffect(() => {
    if (toastText) {
      const timer = setTimeout(() => setToastText(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastText]);

  const handleForm = async (data) => {
    try {
      const response = await api.post(`/users/login`, data);

      if (response?.status === 200) {
        setToastText("Login Successful!");
        const token = response.data.token;
        setAccessToken(token);

        // Use a single timeout for UX
        setTimeout(async () => {
          reset();
          await refetchUser();
          navigate(from, { replace: true });
        }, 1000);
      }
    } catch (error) {
      const serverMessage = error.response?.data?.message;

      // status code checks
      if (error.response?.status === 404) {
        setToastText("Account not found");
      } else if (error.response?.status === 401) {
        setToastText("Invalid email or password");
      } else if (error.response?.status === 500) {
        setToastText("Server error. Please try again later.");
      } else {
        setToastText(
          serverMessage || "Connection failed. Please check your internet.",
        );
      }
    }
  };

  return (
    <div className="w-full theme text-theme relative h-screen flex justify-center items-center">
      <div className="absolute top-10 left-2 sm:left-10">
        <BackButton text="Go Back" navPath="/" />
      </div>
      {toastText && <ToastComp text={toastText} position="top-10" />}
      <div className="w-full max-w-lg h-fit px-6 py-10 sm:border border-gray-400 rounded-2xl">
        <h2 className="text-center text-3xl font-semibold">Login</h2>
        <h4 className="text-gray-500 text-center mt-4 mb-2">
          Enter your email and password to login
        </h4>
        <form
          onSubmit={handleSubmit(handleForm)}
          className="p-4 flex flex-col h-full "
        >
          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium px-2 mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              type="email"
              placeholder="Enter your email"
              className={`border px-3 py-3 rounded-xl shadow-sm ${errors.email ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1 px-2">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-medium px-2 mb-1 mt-5 sm:mt-7">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Min 8 characters" },
              })}
              type="password"
              placeholder="Enter Password"
              className="border border-gray-400 px-3 py-3 rounded-xl shadow-sm"
            />
          </div>

          <Popover
            aria-labelledby="default-popover"
            content={
              <div className="w-64 text-sm theme px-3 py-2">
                <p>This Feature is coming soon</p>
              </div>
            }
          >
            <button
              type="button"
              className="underline text-nowrap w-fit mt-3 hover-transition"
            >
              Forget Password ?
            </button>
          </Popover>

          <button
            disabled={isSubmitting}
            className={`mt-10 mb-3 py-3 rounded-xl font-bold text-white transition-all ${isSubmitting ? "bg-gray-400" : "theme-alt text-theme-alt"}`}
            type="submit"
          >
            {isSubmitting ? "Logging In..." : "Login"}
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
