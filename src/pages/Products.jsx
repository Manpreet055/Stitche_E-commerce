import React from "react";
import { Spinner } from "flowbite-react";
import ProductCard from "../ui/ProductCard";
import useProducts from "../hooks/useProducts";
import AsyncBoundary from "../ui/AsyncBoundary";
import { container, item } from "../Animations/ListStagger";
import { motion } from "framer-motion";
import PaginationComp from "../ui/PaginationComp";
import FilterSortSidebar from "../layout/products/FilterSortSidebar";
import SearchBar from "../layout/header/SearchBar";
import BackButton from "../ui/BackButton";
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
      <div className=" sm:p-5 relative theme text-theme mt-10 sm:mt-20 lg:flex">
        <div className="hidden md:block max-w-sm w-full">
          {" "}
          <FilterSortSidebar query={setQuery} />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-4 items-center">
            <BackButton text="Back" />
            <div className="block md:hidden">
              {" "}
              <FilterSortSidebar query={setQuery} />
            </div>
            <SearchBar />
          </div>
          <motion.ul
            initial="hidden"
            animate="show"
            variants={container}
            className="flex w-full justify-around flex-wrap gap-y-4 sm:gap-8 "
          >
            {products.map((product, index) => (
              <motion.li variants={item} key={index}>
                <ProductCard product={product} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
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
