import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const SalesCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.5 }}
      className="flex will-change-transform text-white justify-center"
    >
      <div className="flex max-w-410 sales-card justify-between my-5 sm:my-10 w-full rounded-3xl ">
        <div className=" w-full lg:w-fit   flex flex-col gap-2 sm:gap-4    p-4 sm:p-6">
          <h2 className="sm:text-2xl font-semibold">Seasonal Private Sale</h2>
          <h2 className="text-2xl sm:text-5xl font-bold">Archive Up to 50%</h2>
          <h4 className="text-lg sm:text-4xl font-medium">on Selected Items</h4>
          <p className="text-sm sm:text-xl max-w-2xs sm:max-w-md">
            Hurry up! The is valid until the end of this month,{" "}
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
        </div>
      </div>
    </motion.div>
  );
};

export default SalesCard;
