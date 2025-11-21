import React from "react";
import { motion } from "framer-motion";

const ContactPageContent = () => {
  return (
    <div className="flex flex-col pt-24 gap-4">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide "
      >
        Contact us
      </motion.h2>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-sm text-lg md:text-xl"
      >
        {" "}
        Email, Call or Complete the form to learn why SMS products is best
        choice for you.{" "}
      </motion.p>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-xl"
      >
        smsdubai@chromojetsms.com
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-lg hover:underline text-rose-800"
      >
        +971 4584 7058
      </motion.div>
      <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        href="#"
        className="hover:underline text-lg font-medium"
      >
        Customer Support
      </motion.a>
    </div>
  );
};

export default ContactPageContent;
