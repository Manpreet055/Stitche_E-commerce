import React, { useEffect } from "react";
import convertDate from "../../utils/convertDate";
import capitalizeFirstLetter from "../../utils/capitalizeLetter";
import { ArrowRight } from "lucide-react";

const RenderOrders = ({ allOrders }) => {
  const orders = allOrders?.orders;
  return (
    <ul className="w-full grid gap-y-4 pb-3 mt-5">
      {/* Header */}
      <li className="w-full py-4 theme-transparent grid grid-cols-5 place-items-center">
        <span className=" ">OrdersId</span>
        <span className=" ">Date</span>
        <span className=" ">Status</span>
        <span className="">Total</span>
        <span className="">Action </span>
      </li>

      {/* All orders */}
      {orders &&
        orders.map((order) => (
          <li
            key={order?.shipping?.trackingId}
            className="w-full grid grid-cols-5 place-items-center"
          >
            <span className="font-semibold text-lg">
              #{order?.shipping?.trackingId}
            </span>
            <span className="text-sm sm:text-base">
              {convertDate(order?.createdAt)}
            </span>
            <span className=" text-sm sm:text-base">
              {capitalizeFirstLetter(order?.orderStatus)}
            </span>
            <span className="text-sm sm:text-base">${order?.totalAmount}</span>
            <button className="border-theme btn-primary flex items-center gap-3 group">
              View Details{" "}
              <span className="group-hover:translate-x-1 ease-in-out transition-all">
                <ArrowRight size={20} />
              </span>
            </button>
          </li>
        ))}
    </ul>
  );
};

export default RenderOrders;
