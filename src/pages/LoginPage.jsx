import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import BackButton from "../ui/BackButton";
import ToastComp from "../ui/ToastComp";
import { useAuthentication } from "../context/AuthProdvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useUser } from "../context/UserDataProvider";
import { Popover, Spinner } from "flowbite-react";

const LoginPage = () => {
  const { setUser, setCart } = useUser();
  const api = useAxiosPrivate();
  const { setAccessToken } = useAuthentication();
  const [loadingState, setLoadingState] = useState(false);

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
      setLoadingState(true);
      const response = await api.post(`/users/login`, data);

      if (response?.status === 200) {
        setToastText("Login Successful!");
        const token = response.data?.token;
        const user = response.data?.user;
        const cart = response.data?.user?.cart;

        setAccessToken(token);
        setUser(user); //setting user after login
        setCart(cart); //setting cart after login

        // Use a single timeout for UX
        setTimeout(async () => {
          reset();
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
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <section className="w-full theme text-theme relative h-screen flex justify-center items-center">
      <div className="absolute top-7 sm:top-20 left-5 sm:left-20">
        <BackButton text="Back" navPath="/" />
      </div>
      {toastText && <ToastComp text={toastText} position="top-10" />}
      <div className="w-full flex flex-col justify-center items-center max-w-lg px-6 sm:py-10 rounded-2xl">
        <h1 className="text-4xl text-center sm:text-5xl mb-3 sm:mb-10 text-nowrap font-extrabold">
          Stitche
        </h1>
        <h1 className="text-3xl text-center sm:text-4xl text-nowrap font-semibold poppins">
          Welcome Back !
        </h1>
        <h4 className="text-gray-500 text-center mt-1 sm:mt-4 mb-4">
          Enter your email and password
        </h4>

        <form
          onSubmit={handleSubmit(handleForm)}
          className=" flex w-full md:w-120 px-3  flex-col h-full "
        >
          {/* Email */}
          <div className="flex flex-col mb-3  ">
            <label className="font-medium opacity-60 px-2 mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              type="email"
              placeholder="Enter your email"
              className="border-theme px-3 py-3 rounded shadow-lg"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1 px-2">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-medium opacity-60 px-2 mb-1 mt-5 sm:mt-7">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Min 8 characters" },
              })}
              type="password"
              placeholder="Enter Password"
              className="border-theme px-3 py-3 rounded shadow-lg"
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
              className="underline text-sm sm:text-base w-full text-end text-nowrap mt-3 hover-transition"
            >
              Forget Password ?
            </button>
          </Popover>

          <button
            disabled={loadingState}
            className={`mt-10 mb-3 py-3 rounded font-bold text-white transition-all theme-alt text-theme-alt`}
            type="submit"
          >
            {loadingState ? (
              <span className="flex items-center justify-center gap-3">
                <Spinner className="h-4 w-fit" color="gray" />
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>

          <h3 className="text-gray-400 text-center">
            Don't have an account?{" "}
            <NavLink to="/signup" className="font-medium text-theme underline">
              Sign Up
            </NavLink>
          </h3>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
