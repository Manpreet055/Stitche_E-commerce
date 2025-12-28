import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ text = "", theme, navPath = -1 }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(navPath)}
      className={`text-theme w-fit flex items-center gap-2 sm:btn-primary  group scale-transition ${theme}`}
    >
      <span className="duration-200 ease-in-out">
        <ArrowLeft size={20} />
      </span>
      {text}
    </button>
  );
};

export default BackButton;
