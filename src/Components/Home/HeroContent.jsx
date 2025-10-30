import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="w-full grid dark-text bg-yellow-800/10 place-items-center grid-cols-1 xl:grid-cols-2  mt-2">
      <div className="flex text-center items-center xl:items-start xl:text-start w-full xl:w-auto p-4 md:px-6 lg:px-12 flex-col gap-8 ">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-snug  font-semibold">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Your One-stop
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Shop for Printers,
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {" "}
            Inks & Acrylics
          </motion.div>
        </h1>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="text-lg md:text-xl lg:text-2xl"
        >
          Discover High-Quality printing solutions
          <br />
          for Home and office at unbeatable prices
        </motion.h3>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[30vw] max-w-2xl min-w-[150px] text-nowrap xl:w-fit px-4 py-4 text-lg font-medium text-white hover-transition  primary-bg rounded-xl"
        >
          <NavLink to="products"> Shop Now</NavLink>
        </motion.button>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="xl:flex p-6 hidden justify-center items-center  h-full"
      >
        <img
          className="h-[650px] object-cover object-center "
          src="/src/assets/heroImage.webp"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default HeroContent;
