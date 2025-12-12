import React from "react";
import BackButton from "../ui/BackButton";
import LoginForm from "../layout/login_signup/LoginForm";
import loginImage from "../assets/images/loginImage.svg";
const LoginPage = () => {
  return (
    <div className="relative flex h-screen ">
      <div className="absolute text-gray-700 p-5">
        {" "}
        <BackButton text="Go Back" />
      </div>
      <img src={loginImage} alt="" className="w-full h-full" />
      <div className="w-full h-full max-w-lg flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
