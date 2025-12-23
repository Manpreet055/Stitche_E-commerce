import { Toast, ToastToggle } from "flowbite-react";
import { motion } from "framer-motion";

const ToastComp = ({ text = "", icon = "", position = "left-[50%]  " }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex justify-center absolute ${position}`}
    >
      <Toast className="theme text-theme border-theme items-center flex">
        {icon && (
          <div className=" p-1 ustify-center rounded-lg bg-amber-50 ">
            {icon}
          </div>
        )}
        <div className="ml-3 text-nowrap font-normal mr-3">{text}</div>
        {/* <ToastToggle
            onClick={(text = "")}
            className="text-lg rounded-xl theme-alt text-theme-alt p-1 transition-all ease-in-out"
            theme=""
          /> */}
      </Toast>
    </motion.div>
  );
};

export default ToastComp;
