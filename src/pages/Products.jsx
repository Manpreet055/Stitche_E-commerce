import React from "react";
import useProducts from "../hooks/useProducts";
import FilterSortSidebar from "../layout/products/FilterSortSidebar";
import RenderProducts from "../layout/products/RenderProducts";
import { motion } from "framer-motion";
import ProductPageHeader from "../layout/products/ProductPageHeader";
const Products = () => {
  const {
    products,
    loadingState,
    error,
    query,
    setQuery,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useProducts();

  const data = {
    loadingState,
    error,
    products,
    currentPage,
    setCurrentPage,
    totalPages,
  };

  return (
    <section className=" sm:p-5 relative theme text-theme mt-10 sm:mt-20 lg:flex">
      <motion.div
        initial={{ translateX: -100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden xl:block max-w-sm w-full"
      >
        <FilterSortSidebar setQuery={setQuery} />
      </motion.div>
      <div className="flex flex-col gap-3 w-full">
        {/* Sidebar for smaller screens */}
        <ProductPageHeader query={query} setQuery={setQuery} />
        <RenderProducts data={data} />
      </div>
    </section>
  );
};

export default Products;
