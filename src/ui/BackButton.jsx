import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ text = "", navPath = -1 }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(navPath)}
      className=" w-fit flex items-center gap-2  group scale-transition"
    >
      <span className="duration-200 ease-in-out">
        <ArrowLeft />
      </span>
      {text}
    </button>
  );
};

export default BackButton;
