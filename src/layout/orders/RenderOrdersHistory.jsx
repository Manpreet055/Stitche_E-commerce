import React, { useEffect } from "react";
import convertDate from "../../utils/convertDate";
import capitalizeFirstLetter from "../../utils/capitalizeLetter";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { container, item } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
const RenderOrdersHistory = ({ allOrders }) => {
  const orders = allOrders?.orders;
  const statusColor = {
    cancelled: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800",
    delivered: "bg-green-100 text-green-800",
    confirmed: "bg-indigo-100 text-indigo-800",
    shipped: "bg-purple-100 text-purple-800",
  };

  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={container}
      className="w-full grid gap-y-6   sm:gap-y-8 pb-3 mt-5"
    >
      {/* Header */}
      <li className="w-full py-4 theme-transparent grid grid-cols-4 place-items-center">
        <span className=" ">Order Id</span>
        <span className=" ">Date</span>
        <span className=" ">Status</span>
        <span className="">Total</span>
      </li>

      {/* All orders */}
      {!orders || orders.length === 0 ? (
        <div className="flex text-lg sm:text-xl justify-center items-center text-theme min-h-100">
          No order history
        </div>
      ) : (
        orders.map((order) => (
          <motion.li variants={item} key={order?.shipping?.trackingId}>
            <NavLink
              to={`/orders/${order._id}`}
              className="w-full grid grid-cols-4 place-items-center"
            >
              <span className="font-semibold sm:text-lg">
                #{order?.shipping?.trackingId}
              </span>
              <span className="text-sm sm:text-base">
                {convertDate(order?.createdAt)}
              </span>
              <span
                className={`text-sm w-fit p-1 px-2 rounded-lg ${statusColor[order?.orderStatus]}`}
              >
                {capitalizeFirstLetter(order?.orderStatus)}
              </span>
              <span className="text-sm sm:text-base">
                ${order?.totalAmount}
              </span>
            </NavLink>
          </motion.li>
        ))
      )}
    </motion.ul>
  );
};

export default RenderOrdersHistory;
