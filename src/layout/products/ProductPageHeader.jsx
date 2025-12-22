import React from "react";
import SearchBar from "../header/SearchBar";
import { ArrowLeft } from "lucide-react";
import FilterSortSidebar from "./FilterSortSidebar";
import { useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";

const ProductPageHeader = ({ setQuery }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex mt-5 sm:mt-0 gap-4 my-2 items-center">
        <button
          onDoubleClick={() => navigate(-1)}
          onClick={() =>
            setQuery((prev) => ({
              ...prev,
              sort: {
                sortField: "",
                sortingOrder: "",
              },
              filters: {},
            }))
          }
          className={`text-theme w-fit flex items-center gap-2 sm:btn-primary  group scale-transition`}
        >
          <span className="duration-200 ease-in-out">
            <ArrowLeft />
          </span>
          Back
        </button>
        <MobileSidebar setQuery={setQuery} />
        <div className="w-full flex justify-center">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default ProductPageHeader;
