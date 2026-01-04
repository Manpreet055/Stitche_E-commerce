import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const useBackNavigation = ({ text = "Back", theme = "" } = {}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const target = location.state?.from?.pathname ?? -1;

  const goBack = () => navigate(target, { replace: true });

  const BackButton = ({ className = "" } = {}) => (
    <button
      type="button"
      onClick={goBack}
      className={`text-theme w-fit flex items-center gap-2 sm:btn-primary group scale-transition ${theme} ${className}`}
    >
      <span className="duration-200 ease-in-out">
        <ArrowLeft size={20} />
      </span>
      {text}
    </button>
  );

  return { target, navigate, goBack, BackButton };
};

export default useBackNavigation;
