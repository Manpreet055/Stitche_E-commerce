import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContactDetails from "./ContactDetails";
import { useUser } from "../../context/UserDataProvider";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { motion } from "framer-motion";
import { Check, CircleAlert, SendHorizonal } from "lucide-react";

const MessageForm = () => {
  const api = useAxiosPrivate();
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();
  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
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
      setLoadingState(true);
      await api.post("/inbox", data);
      reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoadingState(false);
        setError("");
      }, 1000);
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
        className="flex h-fit p-6 flex-col w-fit justify-center items-center max-w-2xl  rounded theme text-theme"
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
              required: "Name is required",
              minLength: 8,
              maxLength: 25,
            })}
            className="p-2 py-4 w-full  sm:p-4 rounded-md sm:text-lg border-theme"
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-red-500 text-xs px-2">
              {errors.name.message}
            </span>
          )}
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
              minLength: 8,
              maxLength: 50,
            })}
            className="p-2 py-4 w-full sm:p-4 rounded-md sm:text-lg border-theme"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs px-2">
              {errors.email.message}
            </span>
          )}
        </div>
        <select
          {...register("subject", {
            required: "Please choose a subject",
          })}
          className=" border-theme p-2 py-4 rounded-md w-full sm:p-4"
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
        {errors.subject && (
          <span className="w-full flex mt-1 justify-start text-red-500 text-xs mb-1 px-2">
            {errors.subject.message}
          </span>
        )}

        {/* Message */}
        <textarea
          {...register("message", {
            required: "Please type a Message",
            minLength: 8,
            maxLength: 150,
          })}
          name="message"
          className="p-4 w-full rounded-md mt-4  sm:text-lg border-theme lg:min-h-46"
          placeholder="Message"
          id="msg"
        />
        {errors.message && (
          <span className="text-red-500 w-full flex justify-start text-xs mt-1 px-2">
            {errors.message.message}
          </span>
        )}
        <button
          disabled={loadingState}
          className={`rounded-md w-full mt-4 ${loadingState ? "dark:bg-neutral-400" : "theme-alt text-theme-alt"}   disabled:bg-gray-400 py-3 flex justify-center hover:opacity-90 px-4 ease-in-out transition-all duration-300 `}
        >
          {loadingState ? (
            <span className="flex items-center gap-2 text-center">
              Message sent
              <Check size={18} />
            </span>
          ) : error ? (
            <span className="flex text-red-500 items-center gap-2 text-center">
              {error}
              <CircleAlert size={18} />
            </span>
          ) : (
            <span className="flex  items-center gap-2 text-center">
              Send Message
              <SendHorizonal size={18} />
            </span>
          )}
        </button>
      </form>
      <ContactDetails />
    </motion.div>
  );
};

export default MessageForm;
