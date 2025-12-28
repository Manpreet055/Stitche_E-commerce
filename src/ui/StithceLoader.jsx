import React from "react";
import { easeInOut, motion } from "framer-motion";
const StitcheLoader = () => {
  return (
    <div className="flex flex-col items-center ">
      <motion.h1
        className="text-4xl font-black"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #333 0%, #fff 50%, #333 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Stitche
      </motion.h1>
      <div className="text-center">
        {/* Container Bar */}
        <div className="relative w-37.5 h-0.5 bg-gray-200 dark:bg-zinc-800 mx-auto mt-5 overflow-hidden">
          {/* Animated Slide Bar */}
          <motion.div
            className="absolute h-full w-full bg-black dark:bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: easeInOut, // Change to "easeInOut" for a smoother, non-linear feel
            }}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default StitcheLoader;
