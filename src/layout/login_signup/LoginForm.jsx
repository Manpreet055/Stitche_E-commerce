import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../services/loginRequest";
import AsyncBoundary from "../../ui/AsyncBoundary";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
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
      const user = await loginUser(data, setLoadingState, setError);
      localStorage.setItem("userId", user._id);
      reset();
      navigate(-1);
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
    <div className="w-full max-w-lg h-fit px-6 py-10">
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

        <button className="btn-primary bg-accent mt-6 text-white" type="submit">
          LogIn
        </button>
      </form>
      <h3 className="text-gray-500 text-center">
        Don't have an account?{" "}
        <span className="font-medium underline text-black">Sign up</span>{" "}
      </h3>
    </div>
  );
};

export default LoginForm;
