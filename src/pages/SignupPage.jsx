import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthentication } from "../context/AuthProdvider";
import { useUser } from "../context/UserDataProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import BackButton from "../ui/BackButton";
import ToastComp from "../ui/ToastComp";

const SignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toastText, setToastText] = useState("");

  const from = location.state?.from?.pathname || "/";
  const api = useAxiosPrivate();
  const { refetchUser } = useUser();
  const { setAccessToken } = useAuthentication();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { fullname: "", email: "", password: "", confirm: "" },
  });

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

    try {
      // Create a copy to avoid mutating the form state directly
      const requestData = { ...data };
      delete requestData.confirm;

      const response = await api.post("/users/signup", requestData);

      if (response?.status === 201) {
        setToastText("Signup Successful!");
        const token = response.data.token;
        setAccessToken(token);

        // Use a single timeout for UX
        setTimeout(async () => {
          reset();
          await refetchUser();
          navigate(from, { replace: true });
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
    }
  };

  return (
    <div className="w-full theme text-theme relative min-h-screen flex justify-center items-center p-4">
      <div className="absolute top-10 left-2 sm:left-10">
        <BackButton text="Go Back" navPath="/" />
      </div>

      {toastText && <ToastComp text={toastText} position="top-10" />}

      <div className="w-full max-w-lg h-fit px-6 py-10 sm:border border-gray-400 rounded-2xl bg-opacity-50">
        <h2 className="text-center text-3xl font-semibold mb-6">Sign Up</h2>

        <form
          onSubmit={handleSubmit(handleSignupForm)}
          className="flex flex-col gap-4"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="font-medium px-2 mb-1">Full Name</label>
            <input
              {...register("fullname", {
                required: "Full name is required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
              type="text"
              placeholder="Enter your name"
              className={`border px-3 py-3 rounded-xl shadow-sm ${errors.fullname ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.fullname && (
              <span className="text-red-500 text-xs mt-1 px-2">
                {errors.fullname.message}
              </span>
            )}
          </div>

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
            <label className="font-medium px-2 mb-1">Password</label>
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

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="font-medium px-2 mb-1">Confirm Password</label>
            <input
              {...register("confirm", {
                required: "Please confirm your password",
              })}
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-400 px-3 py-3 rounded-xl shadow-sm"
            />
          </div>

          <button
            disabled={isSubmitting}
            className={`mt-4 py-3 rounded-xl font-bold text-white transition-all ${isSubmitting ? "bg-gray-400" : "theme-alt text-theme-alt"}`}
            type="submit"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
