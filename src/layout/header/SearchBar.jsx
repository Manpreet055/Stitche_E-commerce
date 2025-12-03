import React, { useState } from "react";
import { useForm } from "react-hook-form";
import searchProducts from "../../services/searchProducts";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../Hooks/useDebounce";

const SearchBar = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // Creating Debounce Variable function
  const debounceSearch = useDebounce({
    callBack: searchProducts,
    delay: 500,
  });

  return (
    <form
      onSubmit={handleSubmit((data) => navigate(`/search?q=${data.searches}`))}
      className="h-full w-full max-w-xl  grow flex items-center gap-2"
    >
      <input
        autoComplete="off"
        {...register("searches", {
          required: "Search field cannot be empty",
        })}
        type="text"
        className="w-full bg-transparent placeholder:text-slate-400  text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Search here.."
        onChange={(event) => {
          event.target.value.length > 2 && debounceSearch(event.target.value);
        }}
      />
      <button
        className="rounded-md primary-bg py-2 px-4 border border-transparent hover-transition text-sm text-white shadow-md hover:shadow-lg "
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
