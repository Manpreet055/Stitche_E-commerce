import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  let handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <motion.form
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleForm}
        className="hidden lg:flex flex-col items-center w-lg max-w-[400px] p-4 border-r-1 border-gray-300  gap-4 "
      >
        <h4 className="font-semibold tracking-wide text-xl w-full text-start py-2">
          Filters
        </h4>
        <div className="flex flex-col p-2 w-full">
          <label
            htmlFor="price-range"
            className=" text-lg mb-2 font-medium text-start w-full"
          >
            {" "}
            Price Range
          </label>
          <input type="range" className="" id="price-range" />
        </div>
        <div className="w-full flex flex-col gap-2 my-2">
          <div className="w-full grid grid-cols-2 gap-2">
            <div className="">From</div>
            <div className="">To</div>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              className="filter-button-input-style"
              placeholder="50"
            />
            <input
              type="number"
              className="filter-button-input-style"
              placeholder="3000"
            />
          </div>
        </div>
        <div className="flex flex-col p-2 w-full">
          <label
            htmlFor="price-range"
            className=" text-lg mb-2 font-medium text-start w-full"
          >
            {" "}
            Sales
          </label>
          <input type="range" className="" id="price-range" />
        </div>
        <div className="w-full flex flex-col gap-2 my-2">
          <div className="w-full grid grid-cols-2 gap-2">
            <div className="">From</div>
            <div className="">To</div>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              className="filter-button-input-style"
              placeholder="1"
            />
            <input
              type="number"
              className="filter-button-input-style"
              placeholder="100"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 my-2">
          <h3 className="w-full text-lg font-medium text-start">Category</h3>
          <div className="flex w-full gap-6 flex-wrap">
            <button
              type="button"
              className=" hover-transition filter-button-input-style w-sm"
            >
              Printers
            </button>
            <button
              type="button"
              className=" hover-transition filter-button-input-style w-sm"
            >
              Media
            </button>
            <button
              type="button"
              className=" hover-transition filter-button-input-style w-sm"
            >
              Inks
            </button>
            <button
              type="button"
              className="hover-transition filter-button-input-style w-sm"
            >
              Tapes
            </button>
            <button
              type="button"
              className="hover-transition filter-button-input-style w-sm"
            >
              Boards
            </button>
            <button
              type="button"
              className="hover-transition filter-button-input-style w-sm"
            >
              Display
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h3 className="text-lg font-medium w-full text-start">State</h3>
          <div className="full flex rounded-2xl flex-col justify-start w-full border border-gray-300 px-2 ">
            <div className="flex px-2 gap-2 items-center py-4 border-b border-gray-200">
              <input type="checkbox" className="" id="all-category" />
              <label htmlFor="all-category"> All</label>
            </div>
            <div className="flex px-2 gap-2 items-center py-4 border-b border-b-gray-200">
              <input type="checkbox" className="" id="all-category" />
              <label htmlFor="all-category"> New</label>
            </div>
            <div className="flex px-2 gap-2 items-center py-4 border-b-gray-200">
              <input type="checkbox" className="" id="all-category" />
              <label htmlFor="all-category"> Refurbished</label>
            </div>
          </div>
        </div>
        <div className="flex mt-4 gap-2 w-full">
          <button className="primary-bg p-3 rounded-xl hover-transition text-white">
            {" "}
            Show 32 Results
          </button>
          <button className="primary-bg p-3 rounded-xl hover-transition text-white">
            {" "}
            Reset
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Sidebar;
