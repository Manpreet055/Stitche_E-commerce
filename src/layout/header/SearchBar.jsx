import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import searchProducts from "../../services/searchProducts";
import { useNavigate } from "react-router-dom";
import debounce from "../../utils/debounce";
const SearchBar = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  // Creating Debounce Variable function
  const debounceSearch = debounce(searchProducts, 500);

  let watchSearchBar = watch("search");

  useEffect(() => {
    if (watchSearchBar?.length > 2) {
      debounceSearch(watchSearchBar);
    }
  }, [watchSearchBar]);

  const handleFormSubmit = (data) => {
    const query = data.search?.trim();
    if (query && query.length > 2) {
      searchProducts(query);
    }
    navigate(`/search?q=${query || ""}`);
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="h-full w-full max-w-xl  grow flex items-center gap-2"
    >
      <input
        autoComplete="off"
        {...register("search", {
          required: true,
        })}
        type="text"
        className="w-full bg-transparent placeholder:text-gray-700  text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Search here.."
      />
      <button className="bg-primary btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
