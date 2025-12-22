import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const SalesCard = () => {
  return (
    <div className="flex text-white justify-center">
      <div className="flex max-w-6xl sales-card justify-between my-5 sm:my-10 w-full rounded-3xl ">
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" w-full lg:w-fit  flex flex-col gap-2 sm:gap-4    p-4 sm:p-6"
        >
          <h2 className="sm:text-2xl font-semibold">Limited Time Offer</h2>
          <h2 className="text-2xl sm:text-5xl font-bold">Up to 50% off</h2>
          <h4 className="text-lg sm:text-4xl font-medium">on Selected Items</h4>
          <p className="text-sm sm:text-xl max-w-2xs sm:max-w-md">
            Hurry up! The offer is valid until the end of this month,{" "}
            <span className="hidden sm:block">
              Shop now and save big on your favourite items
            </span>
          </p>
          <NavLink
            to="/products"
            className="btn-primary text-sm sm:text-lg items-center w-fit text-black bg-white flex mt-1 gap-2"
          >
            See Collections <ArrowRight className="hidden md:block" />
          </NavLink>
        </motion.div>

        <div></div>
      </div>
    </div>
  );
};

export default SalesCard;
