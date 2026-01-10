import { Spinner } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const DebounceSuggestions = ({ searches = [], loadingState, error, show }) => {
  return (
    <div className="absolute z-10 top-15 max-w-full sm:max-w-118 rounded-xl  shadow-black-2xl p-4 sm:p-6 theme text-theme min-h-100 w-full">
      {show && (
        <ul
          className={`h-full  grid grid-rows-${searches.length} gap-4 max-h-60 overflow-y-auto`  }
        >
          {loadingState ? (
            <div className="h-full w-full grid place-items-center">
              <Spinner color="gray" />
            </div>
          ) : error ? (
            <div className="h-full w-full grid place-items-center">
              <p>{error}</p>
            </div>
          ) : searches.length === 0 || !searches ? (
            <div className="h-full w-full grid place-items-center">
              <p className="font-medium h-full text-sm sm:text-lg ">
                No products found{" "}
              </p>
            </div>
          ) : (
            searches.map((result) => (
              <li key={result?._id}>
                <NavLink
                  to={`/product/${result?._id}`}
                  className={`flex flex-col sm:gap-1`}
                >
                  <span className="">{result?.title}</span>
                  <span className="text-gray-500 text-sm">
                    {result?.subCategory}
                  </span>
                </NavLink>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default DebounceSuggestions;
