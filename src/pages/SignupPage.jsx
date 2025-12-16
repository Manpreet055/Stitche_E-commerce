import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import BackButton from "../ui/BackButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthentication } from "../context/AuthProdvider";
import { useUser } from "../context/UserDataProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const SignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const api = useAxiosPrivate();
  const { refetchUser, loadingState, error, setError } = useUser();
  const { setAccessToken } = useAuthentication();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignupForm = async (data) => {
    try {
      const comparePassword = data.password === data.confirm;
      if (!comparePassword) return setError("Both password should be equal");
      delete data.confirm;

      const response = await api.post("/users/signup", data);
      const token = response.data.token;
      setAccessToken(token);
      reset();
      navigate(from, { replace: true });
      await refetchUser();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full relative h-screen flex justify-center items-center">
      <div className="absolute top-10 left-10">
        <BackButton text="Go Back" navPath="/" />
      </div>
      <div className="w-full max-w-lg h-fit px-6 py-10 border border-gray-400 rounded-2xl">
        <h2 className="text-center text-3xl font-semibold">Sign Up</h2>

        <form
          onSubmit={handleSubmit(handleSignupForm)}
          className="p-4 flex flex-col h-full "
        >
          <label htmlFor="fullname" className="font-medium px-2 my-2">
            Full Name
          </label>
          <input
            {...register("fullname", {
              required: true,
              minLength: 6,
            })}
            id="fullname"
            type="text"
            placeholder="Enter your name"
            className="border border-gray-400 p-2 rounded-xl shadow-md"
          />
          {errors?.username && (
            <p className="text-red-600">{errors.username?.message}</p>
          )}

          <label htmlFor="email" className="font-medium px-2 my-2">
            Email
          </label>
          <input
            {...register("email", {
              required: true,
              minLength: 14,
            })}
            id="email"
            type="email"
            placeholder="Enter Your Email Address"
            className="border border-gray-400 p-2 rounded-xl shadow-md"
          />
          <label htmlFor="password" className=" font-medium px-2 mb-2 mt-6 ">
            Password
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            id="password"
            type="password"
            placeholder="Enter Password"
            className="border border-gray-400 p-2 rounded-xl shadow-md"
          />
          <label
            htmlFor="confirm-password"
            className=" font-medium px-2 mb-2 mt-6 "
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            {...register("confirm", {
              required: true,
              minLength: 8,
            })}
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-400 p-2 rounded-xl shadow-md"
          />
          <button
            className="btn-primary bg-accent mt-6 text-white"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
