import React from "react";
import { useForm } from "react-hook-form";
import ContactDetails from "./ContactDetails";
const ContactForm = () => {
  const { handleSubmit, reset, register } = useForm();
  const handleForm = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex md:grow justify-center  items-center flex-col">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex h-fit p-6 flex-col w-fit justify-center items-center  rounded theme text-theme"
      >
        <h2 className="font-bold w-full text-start text-4xl lg:text-6xl">
          Get in Touch
        </h2>
        <div className="max-w-xs sm:max-w-full flex items-center justify-center flex-wrap gap-3 my-4">
          <input
            id="name"
            type="text"
            {...register("name", {
              required: true,
            })}
            className="p-2 py-4  sm:p-4 rounded-md border sm:text-lg dark:border-gray-500 border-gray-200"
            placeholder="Name"
          />
          <input
            type="text"
            {...register("email", {
              required: true,
            })}
            className="p-2 py-4 sm:p-4 rounded-md border sm:text-lg dark:border-gray-500 border-gray-200"
            placeholder="Email"
          />
        </div>
        <textarea
          {...register("message", {
            required: true,
          })}
          name="message"
          className="p-4 w-full rounded-md mb-4 border sm:text-lg dark:border-gray-500 border-gray-200 lg:min-h-46"
          placeholder="Message"
          id="msg"
        />
        <button className="rounded-md w-full py-3 hover:opacity-90 px-4 ease-in-out transition-all duration-300 theme-alt text-theme-alt">
          Send Message
        </button>
      </form>
      <ContactDetails />
    </div>
  );
};

export default ContactForm;
