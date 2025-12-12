import React from "react";
import loginImage from "../../assets/images/loginImage.svg";

const SignupForm = () => {
  return (
    <div className="flex flex-wrap w-full h-screen items-center justify-center">
      <img src={loginImage} className="h-50 flex justify-center" alt="login" />
      <form className="border">
        <h2 className="text-center w-full">Login </h2>
      </form>
    </div>
  );
};

export default SignupForm;
