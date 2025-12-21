import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div
      className={`hero w-full mt-15 sm:mt-20 sm:py-15 md:min-h-[40vw] flex flex-col gap-3 justify-around md:px-10 p-3`}
    >
      <motion.p
        initial={{ translateX: -100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl lg:text-7xl max-w-sm lg:max-w-2xl tracking-wide leading-snug text-white font-bold "
      >
        Beyond Trends. Pieces Built to Be Inherited.{" "}
      </motion.p>
      <NavLink
        to="products"
        className="flex items-center gap-2  group text-white p-5 w-fit hover:bg-white/20"
      >
        Shop now{" "}
        <span className="group-hover:translate-x-2 ease-in-out transition-all duration-300">
          <ArrowRight />
        </span>
      </NavLink>
    </div>
  );
};

export default HeroContent;
