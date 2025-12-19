import React from "react";
import { ShieldCheck } from "lucide-react";
import { useUser } from "../../context/UserDataProvider";
const OrderSummary = () => {
  const { cart } = useUser();
  const sumofProductsPrice = cart.reduce(
    (acc, p) => acc + p?.product?.price * p.qty,
    0,
  );
  const priceAfterDiscount = sumofProductsPrice * 0.9;
  const deliveryFee = sumofProductsPrice * 0.01;
  return (
    <div className="flex text-theme flex-col border w-full min-w-sm lg:max-w-lg justify-around border-gray-300 rounded-2xl  p-4">
      <div>
        <h2 className="text-xl font-medium">Order Summary</h2>{" "}
        <div className="flex justify-between items-center mt-4">
          Sub Total :{" "}
          <span className="font-bold">${sumofProductsPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          Discount (10%) :{" "}
          <span className="font-bold">${priceAfterDiscount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          Delivery fee :{" "}
          <span className="font-bold">${deliveryFee.toFixed(2)}</span>
        </div>
        <hr className="my-6 text-gray-400" />
        <div className="flex justify-between items-center mt-4">
          Total :{" "}
          <span className="font-bold">
            ${(priceAfterDiscount + deliveryFee).toFixed(2)}
          </span>
        </div>
      </div>

      <div>
        <div className="flex mt-10 justify-self-end justify-center w-full">
          <ShieldCheck />
          <p className="max-w-2xs">
            90 Days limited warranty against manufacturer's defects.{" "}
            <a href="#" className="font-semibold underline">
              Details
            </a>
          </p>
        </div>
        <button className=" w-full theme-alt text-theme-alt p-4 mt-3 rounded-2xl hover:scale-[1.02] ease-in-out duration-300 transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
