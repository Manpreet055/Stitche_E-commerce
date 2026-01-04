import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import searchProducts from "../../services/searchProducts";
import { useNavigate, NavLink } from "react-router-dom";
import debounce from "../../utils/debounce";
import { Spinner } from "flowbite-react";
import DebounceSuggestions from "../../ui/DebounceSuggestions";

const SearchBar = ({ isDrawer = false, theme = "text-theme theme" }) => {
  const navigate = useNavigate();
  const [searches, setSearches] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, watch } = useForm();

  const watchSearchBar = watch("search");

  // Creating Debounce Variable function
  const debounceFn = React.useMemo(
    () =>
      debounce(async (query) => {
        try {
          setLoadingState(true);
          if (query?.length > 2) {
            const results = await searchProducts(query);
            setSearches(results);
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoadingState(false);
        }
      }, 500),
    [],
  );

  useEffect(() => {
    debounceFn(watchSearchBar);
    if (watchSearchBar === "") {
      setSearches([]);
    }
  }, [watchSearchBar, debounceFn]);

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
      className={` relative h-full w-full max-w-xl  ${theme}  grow ${!isDrawer ? "hidden md:flex" : "flex "} items-center gap-2`}
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
      <DebounceSuggestions
        loadingState={loadingState}
        error={error}
        searches={searches}
      />
    </form>
  );
};

export default SearchBar;
