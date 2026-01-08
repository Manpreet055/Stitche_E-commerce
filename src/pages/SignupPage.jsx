import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthentication } from "../context/AuthProdvider";
import { useUser } from "../context/UserDataProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import ToastComp from "../ui/ToastComp";
import { Spinner } from "flowbite-react";
import { Eye } from "lucide-react";
import useBackNavigation from "../hooks/useBackNavigation";
import { motion } from "framer-motion";

const SignupPage = () => {
  const { BackButton, navigate } = useBackNavigation();
  const [toastText, setToastText] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const api = useAxiosPrivate();
  const { setUser } = useUser();
  const { setAccessToken } = useAuthentication();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm({
    defaultValues: { fullname: "", email: "", password: "", confirm: "" },
  });

  // set the focus to email input
  useEffect(() => {
    setFocus("fullname");
  }, []);

  // Clear toast after 3 seconds automatically
  useEffect(() => {
    if (toastText) {
      const timer = setTimeout(() => setToastText(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastText]);

  const handleSignupForm = async (data) => {
    if (data.password !== data.confirm) {
      return setToastText("Passwords did not match");
    }
    // Create a copy to avoid mutating the form state directly
    const requestData = { ...data };
    delete requestData.confirm;

    try {
      setLoadingState(true);
      const response = await api.post("/users/signup", requestData);
      if (response?.status === 201) {
        setToastText("Signup Successful!");
        const token = response.data.token;
        const user = response.data?.user;
        setAccessToken(token);
        setUser(user);

        // Use a single timeout for UX
        setTimeout(async () => {
          reset();
          navigate(-2);
        }, 1500);
      }
    } catch (error) {
      const serverMessage = error.response?.data?.message;
      if (error.response?.status === 409) {
        setToastText("Email or username already exists");
      } else if (error.response?.status === 500) {
        setToastText("Server error. Please try again later.");
      } else {
        setToastText(serverMessage || "An unexpected error occurred");
      }
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <section className="w-full theme text-theme relative min-h-screen flex justify-center items-center p-4">
      <div className="absolute top-7 sm:top-20 left-5 sm:left-20">
        {BackButton()}
      </div>

      {toastText && <ToastComp text={toastText} position="top-10" />}

      <div className="w-full max-w-lg h-fit px-2 sm:px-6 py-10 sm:border-theme rounded-2xl bg-opacity-50">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center sm:text-5xl mb-3 sm:mb-10 text-nowrap font-extrabold"
        >
          Stitche
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl text-center sm:text-4xl text-nowrap font-semibold"
        >
          Welcome to Stitche!{" "}
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500 sm:text-base text-sm text-center mt-1 sm:mt-4 mb-4"
        >
          we're so glad you're part of the fabric now{" "}
        </motion.h4>
        <form
          onSubmit={handleSubmit(handleSignupForm)}
          className="flex flex-col gap-3 px-2 sm:gap-7"
        >
          {/* Full Name */}
          <div className="flex flex-col mb-2">
            <label className="font-medium opacity-40 px-2 mb-1">
              Full Name
            </label>
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              {...register("fullname", {
                required: "Full name is required",
                minLength: { value: 2, message: "Min 2 characters" },
              })}
              type="text"
              placeholder="Enter your name"
              className={`border-theme px-3 py-3 rounded shadow-sm ${errors.fullname ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.fullname && (
              <span className="text-red-500 text-xs mt-1 px-2">
                {errors.fullname.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col mb-2">
            <label className="font-medium opacity-40 px-2 mb-1">Email</label>
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              type="email"
              placeholder="Enter your email"
              className={`border-theme px-3 py-3 rounded shadow-sm ${errors.email ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1 px-2">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="relative flex flex-col mb-2">
            <label className="font-medium opacity-40 px-2 mb-1">Password</label>
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Min 8 characters" },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className=" border-theme px-3 py-3 rounded shadow-sm"
            />
            <span
              className="absolute right-3 top-11 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Eye className="h-5 w-5 text-gray-500" />
            </span>
            {errors.password && (
              <span className="text-red-500 text-xs mt-1 px-2">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative flex flex-col mb-2">
            <label className="font-medium opacity-40 px-2 mb-1">
              Confirm Password
            </label>
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              {...register("confirm", {
                required: "Please confirm your password",
              })}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="border-theme px-3 py-3 rounded shadow-sm"
            />
            <span
              className="absolute right-3 top-11 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Eye className="h-5 w-5 text-gray-500" />
            </span>
          </div>

          <button
            disabled={loadingState}
            className={`mt-4 py-3 rounded font-bold text-white transition-all theme-alt text-theme-alt`}
            type="submit"
          >
            {loadingState ? (
              <span className="flex items-center justify-center gap-3">
                <Spinner className="h-4 w-fit" color="gray" />
                Creating Account...
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
