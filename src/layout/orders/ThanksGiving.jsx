import { BadgeCheck } from "lucide-react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useBackNavigation from "../../hooks/useBackNavigation";
import { useUser } from "../../context/UserDataProvider";
const ThanksGiving = () => {
  const { id } = useParams();
  const { BackButton } = useBackNavigation();
  const { user } = useUser();
  return (
    <div className="grid place-items-center relative min-h-200">
      <div className="fixed top-25 left-5">{BackButton()}</div>
      <div className="w-full max-w-300 text-theme p-4 mt-5   min-h-150 grid place-items-center">
        <div className="grid place-items-center gap-3">
          {" "}
          <BadgeCheck className="my-4" size={54} />
          {/* Heading */}
          <h2 className="font-medium w-full text-center text-2xl sm:text-4xl poppins">
            Thank You for Your Purchase!
          </h2>
          <p className="text-gray-500  sm:text-lg my-2  max-w-xl text-center">
            Your order has been successfully placed. A confirmation email has
            been sent to{" "}
            <span className="sm:text-xl font-bold">{user?.email}</span>
          </p>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-3">
          <NavLink
            to="/products"
            className="w-full theme-alt text-theme-alt btn-primary sm:text-lg poppins max-w-sm text-center  "
          >
            Continue Shopping
          </NavLink>
          <NavLink
            to={`/orders/${id}`}
            className="w-full theme-alt text-theme-alt btn-primary sm:text-lg poppins max-w-sm text-center  "
          >
            Checkout order
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ThanksGiving;
