import React from "react";
import { Spinner } from "flowbite-react";
import ProductCard from "../ui/ProductCard";
import useProducts from "../hooks/useProducts";
import AsyncBoundary from "../ui/AsyncBoundary";
import { container, item } from "../Animations/ListStagger";
import { motion } from "framer-motion";
import PaginationComp from "../ui/PaginationComp";
import FilterData from "../ui/FilterData";
import SortData from "../ui/SortData";
import { PRODUCTS_FILTER_OPTIONS } from "../utits/sort_filter_options";
import { PRODUCTS_SORTING_OPTIONS } from "../utits/sort_filter_options";
import SearchBar from "../layout/header/SearchBar";
const Products = () => {
  const {
    products,
    loadingState,
    error,
    setQuery,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useProducts();

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <AsyncBoundary customMessage="No product found." />;
  }

  return (
    <>
      <div className="mt-20">
        <div className="w-full flex justify-around items-center py-3">
          <SearchBar />
          <SortData
            sortOptions={PRODUCTS_SORTING_OPTIONS}
            setQuery={setQuery}
          />
          <FilterData
            setQuery={setQuery}
            filterOptions={PRODUCTS_FILTER_OPTIONS}
          />
          <button disabled className="hidden md:block"></button>
        </div>
        {loadingState ? (
          <div
            role="status"
            className="w-full h-screen flex justify-center items-center"
          >
            <Spinner />
            <div className="sr-only text-black">Loading...</div>
          </div>
        ) : (
          <motion.ul
            initial="hidden"
            animate="show"
            variants={container}
            className="flex w-full justify-evenly flex-wrap gap-y-8 gap-x-6"
          >
            {products.map((product, index) => (
              <motion.li variants={item} key={index}>
                <ProductCard product={product} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>{" "}
      <PaginationComp
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
