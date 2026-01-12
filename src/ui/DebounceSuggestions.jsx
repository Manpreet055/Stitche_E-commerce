import { Spinner } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const DebounceSuggestions = ({ searches = [], loadingState, error, show }) => {
  return (
    <>
      {show && (
        <div className="absolute rounded-xl  shadow-black-2xl p-4 sm:p-6  z-10 top-15 max-w-full sm:max-w-118 theme text-theme min-h-100 max-h-100 w-full">
          {loadingState ? (
            <div className="h-full min-h-91 w-full grid place-items-center">
              <Spinner color="gray" />
            </div>
          ) : error ? (
            <div className="h-full min-h-91 w-full grid place-items-center">
              <p>{error || "An error occurred"}</p>
            </div>
          ) : searches.length === 0 || !searches ? (
            <div className="h-full w-full min-h-92 grid place-items-center">
              <p className="font-medium text-sm sm:text-lg ">
                No products found{" "}
              </p>
            </div>
          ) : (
            <ul className="max-h-91 p-2 overflow-y-auto scrollbar-hide grid grid-rows-[repeat(10,)12px] gap-3">
              {searches.map((result) => (
                <li key={result?._id} className="mb-2">
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
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default DebounceSuggestions;
