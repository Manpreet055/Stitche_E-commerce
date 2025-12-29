import { Spinner } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const DebounceSuggestions = ({ searches, loadingState, error }) => {
  return (
    <>
      {searches && searches.length > 0 && (
        <ul className="rounded-xl border-theme p-4 sm:p-6 flex gap-3 sm:gap-5 flex-col justify-around absolute z-10 top-15 max-w-full sm:max-w-118 theme text-theme min-h-100 w-full ">
          {loadingState ? (
            <div className="h-full w-full grid place-items-center">
              <Spinner color="gray" />
            </div>
          ) : error ? (
            <div className="h-full w-full grid place-items-center">
              <p>{error}</p>
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
    </>
  );
};

export default DebounceSuggestions;
