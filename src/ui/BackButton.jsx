import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const BackButton = ({ text = "" }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className=" w-fit flex items-center  group scale-transition"
    >
      <span className="duration-200 ease-in-out">
        <ChevronLeft />
      </span>
      {text}
    </button>
  );
};

export default BackButton;
