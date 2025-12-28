import React from "react";
import { useForm } from "react-hook-form";
import ContactDetails from "./ContactDetails";
import { useUser } from "../../context/UserDataProvider";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { motion } from "framer-motion";
const ContactForm = () => {
  const api = useAxiosPrivate();
  const { user } = useUser();
  const { handleSubmit, reset, register } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });
  const handleForm = async (data) => {
    data.user = user._id;
    try {
      const response = await api.post("/inbox", data);
      const responseData = response.data?.newMessage;
      if (response.status === 200) {
        reset();
      }
      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <motion.div
      initial={{ translateX: -100, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex md:grow justify-center  items-center flex-col"
    >
      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex h-fit p-6 flex-col w-fit justify-center items-center  rounded theme text-theme"
      >
        <h2 className="font-bold w-full text-start text-4xl lg:text-6xl">
          Get in Touch
        </h2>
        {/* Name and email */}
        <div className="w-full max-w-xs sm:max-w-full flex items-center flex-wrap gap-3 my-4">
          <input
            id="name"
            type="text"
            {...register("name", {
              required: true,
            })}
            className="p-2 py-4 w-full  sm:p-4 rounded-md sm:text-lg border-theme"
            placeholder="Name"
          />
          <input
            type="text"
            {...register("email", {
              required: true,
            })}
            className="p-2 py-4 w-full sm:p-4 rounded-md sm:text-lg border-theme"
            placeholder="Email"
          />
        </div>
        <select
          {...register("subject")}
          className=" border-theme mb-3 p-2 py-4 rounded-md w-full sm:p-4"
          name="subject"
          id="subject"
        >
          <option selected value="General Inquiry">
            General Inquiry
          </option>
          <option value="Order Issue">Order Issue</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>

        {/* Message */}
        <textarea
          {...register("message", {
            required: true,
          })}
          name="message"
          className="p-4 w-full rounded-md mb-4 sm:text-lg border-theme lg:min-h-46"
          placeholder="Message"
          id="msg"
        />
        <button className="rounded-md w-full py-3 hover:opacity-90 px-4 ease-in-out transition-all duration-300 theme-alt text-theme-alt">
          Send Message
        </button>
      </form>
      <ContactDetails />
    </motion.div>
  );
};

export default ContactForm;
