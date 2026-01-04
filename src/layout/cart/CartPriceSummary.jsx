import React from "react";
import { ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";
const CartPriceSummary = ({ priceDetails }) => {
  const { priceAfterDiscount, deliveryFee, sumofProductsPrice, subTotal } =
    priceDetails;

  return (
    <div className="flex grow text-theme flex-col border w-full min-w-sm xl:max-w-lg justify-around border-gray-300 rounded  p-4">
      <div>
        <h2 className="text-lg sm:text-xl font-medium">Order Summary</h2>{" "}
        <div className="grid grid-cols-2 place-items-center mt-4">
          Sub Total <span className="font-medium">${sumofProductsPrice}</span>
        </div>
        <div className="grid grid-cols-2 place-items-center mt-4">
          Discount (10%){" "}
          <span className="font-medium">${priceAfterDiscount}</span>
        </div>
        <div className="grid grid-cols-2 place-items-center mt-4">
          Delivery fee <span className="font-medium">${deliveryFee}</span>
        </div>
        <hr className="my-6 text-gray-400" />
        <div className="grid grid-cols-2 place-items-center mt-4">
          Total <span className="font-medium">${subTotal}</span>
        </div>
      </div>

      <div>
        <div className="mt-10 justify-self-center flex gap-2  max-w-2xs w-full">
          <ShieldCheck size={44} />
          <span className="text-sm sm:text-base">
            90 Days limited warranty against manufacturer's defects.{" "}
            <a href="#" className="font-semibold underline">
              Details
            </a>
          </span>
        </div>
        <NavLink to="/orders" className="flex justify-center">
          {" "}
          <button className=" w-full max-w-xs sm:max-w-full theme-alt text-theme-alt p-3  sm:p-4 mt-3 rounded-2xl hover:scale-[1.02] ease-in-out duration-300 transition-all">
            Order Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartPriceSummary;
