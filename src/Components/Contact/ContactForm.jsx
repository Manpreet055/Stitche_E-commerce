import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  let [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChanges = (event) => {
    let { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  async function handleForm() {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
    // try {
    //   let response = await fetch(
    //     "https://chromojet-1e5b1-default-rtdb.firebaseio.com",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     }
    //   );
    //   let data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log(error.message);
    // }
  }
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      exit={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-fit h-fit my-2 px-8 rounded-3xl"
    >
      <div className=" min-w-[380px] flex items-center justify-center py-6">
        {/* <!-- Author: FormBold Team --> */}
        {/* <!-- Learn More: https://formbold.com --> */}
        <div className="mx-auto w-full max-w-[550px]">
          <form
            onSubmit={handleForm}
            action="https://formbold.com/s/FORM_ID"
            method="POST"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium "
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="name"
                value={formData.fullname}
                onChange={handleChanges}
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium "
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChanges}
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium "
              >
                Phone number
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChanges}
                placeholder="Enter Phone number"
                className="w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium "
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChanges}
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <p className=" mb-5 text-sm text-gray-500 mt-4 text-center max-w-md mx-auto">
              By contacting us, you agree to our{" "}
              <span className="text-rose-700 underline cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-rose-700 underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md primary-bg hover-transition py-3 px-8 text-base font-semibold text-white w-full outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
