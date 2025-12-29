import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import searchProducts from "../../services/searchProducts";
import { useNavigate } from "react-router-dom";
import debounce from "../../utils/debounce";
const SearchBar = ({ isDrawer = false }) => {
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
      className={`h-full w-full max-w-xl theme text-theme  grow ${!isDrawer ? "hidden md:flex" : "flex "} items-center gap-2`}
    >
      <input
        autoComplete="off"
        {...register("search", {
          required: true,
        })}
        type="text"
        className={`w-full h-10 sm:h-12 bg-transparent placeholder:text-gray-700 dark:placeholder:text-gray-400 text-sm sm:text-base border border-slate-200 rounded-md ${!isDrawer ? "pl-10" : "pl-2"} pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
        placeholder="Search Products .."
      />
      <button
        className="theme-alt text-theme-alt  flex items-center gap-1 rounded-md p-2.5 ease-in-out transition-all duration-300"
        type="submit"
      >
        <Search size={20} /> {!isDrawer && "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
