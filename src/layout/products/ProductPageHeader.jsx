import React from "react";
import SearchBar from "../header/SearchBar";
import { ArrowLeft, X } from "lucide-react";
import FiltersSidebar from "./FiltersSidebar";
import useBackNavigation from "../../hooks/useBackNavigation";

const ProductPageHeader = ({ setQuery, query }) => {
  const { BackButton } = useBackNavigation();
  // Reset the filters and sort
  const clearFilters = () => {
    setQuery((prev) => ({
      ...prev,
      sort: {
        sortField: "",
        sortingOrder: "",
      },
      filters: {},
    }));
  };

  const isSorted =
    query.sort.sortField !== "" && query.sort.sortingOrder !== "";
  return (
    <>
      <div className="flex flex-wrap mt-5 sm:mt-0 gap-4  items-center">
        <div className="ml-3"> {BackButton()}</div>
        <FiltersSidebar query={query} setQuery={setQuery} />
        {/* Clear Filters Button */}
        {(isSorted || Object.keys(query?.filters).length !== 0) && (
          <button
            className="theme-alt text-theme-alt py-2 px-3 rounded-2xl text-xs sm:text-base shadow-2xl mt-1 flex items-center sm:gap-1"
            onClick={clearFilters}
          >
            <X size={15} /> Clear Filters
          </button>
        )}
        <div className="w-fit min-w-lg grow flex justify-center">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default ProductPageHeader;
