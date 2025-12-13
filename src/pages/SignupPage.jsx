import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/loginRequest";
import AsyncBoundary from "../ui/AsyncBoundary";
import BackButton from "../ui/BackButton";
import { useNavigate, NavLink } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
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

  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const handleForm = async (data) => {
    try {
      // const user = await loginUser(data, setLoadingState, setError);
      // localStorage.setItem("userId", user._id);
      // reset();
      // navigate(-1);

      const comparePass = data.password === data.confirm;
      delete data.confirm;
      console.log(data);
    } catch (error) {
      setError(error.message);
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
      <div className="w-full max-w-lg h-fit px-6 py-10 border border-gray-400 rounded-2xl">
        <h2 className="text-center text-3xl font-semibold">Sign Up</h2>

        <form
          onSubmit={handleSubmit(handleForm)}
          className="p-4 flex flex-col h-full "
        >
          <label htmlFor="username" className="font-medium px-2 my-2">
            UserName
          </label>
          <input
            {...register("username", {
              required: true,
              minLength: 6,
            })}
            id="username"
            type="text"
            placeholder="Enter User name"
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
              minLength: 10,
            })}
            id="password"
            type="password"
            placeholder="Enter Your Email Address"
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
              minLength: 10,
            })}
            type="password"
            placeholder="Enter Your Email Address"
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
