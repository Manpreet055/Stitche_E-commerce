import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center">
      <form className="w-full md:w-md lg:w-xl min-w-[200px]">
        <div className="relative flex items-center">
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Printers, Inks, Toners..."
          />

          <button
            className="rounded-md primary-bg py-2 px-4 border border-transparent text-center hover-transition text-sm text-white shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
