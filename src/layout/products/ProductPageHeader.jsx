import React from "react";
import SearchBar from "../header/SearchBar";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";

const ProductPageHeader = ({ setQuery, query }) => {
  const navigate = useNavigate();

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
      <div className="flex flex-wrap mt-5 sm:mt-0 gap-4 my-2 items-center">
        <button
          onClick={() => navigate(-1)}
          className={`text-theme w-fit flex items-center gap-2 sm:btn-primary  group scale-transition`}
        >
          <span className="duration-200 ease-in-out">
            <ArrowLeft />
          </span>
          Back
        </button>
        <MobileSidebar query={query} setQuery={setQuery} />
        {/* Clear Filters Button */}
        {(isSorted || Object.keys(query?.filters).length !== 0) && (
          <button
            className="btn-primary text-nowrap hidden rounded-lg theme-alt text-theme-alt mt-1 text-xs lg:flex items-center gap-1 border-theme"
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
