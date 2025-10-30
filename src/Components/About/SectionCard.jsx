import React from "react";
import { motion } from "framer-motion";

const SectionCard = (props) => {
  return (
    <div className="w-full gap-12 lg:gap-0 flex justify-center md:justify-evenly flex-wrap  py-10 items-center max-h-2xl">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={props.image}
        className={`h-96 ${props.order && "lg:order-2"}`}
        alt=""
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-xl flex flex-col gap-4"
      >
        {props.heading && (
          <p className="primary-text  text-3xl font-semibold">{props.heading}</p>
        )}
        <p className="leading-8">{props.para}</p>
      </motion.div>
    </div>
  );
};

export default SectionCard;
