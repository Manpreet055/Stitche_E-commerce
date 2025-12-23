import React from "react";
import useProducts from "../hooks/useProducts";
import FilterSortSidebar from "../layout/products/FilterSortSidebar";
import RenderProducts from "../layout/products/RenderProducts";
import ProductPageHeader from "../layout/products/ProductPageHeader";
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

  const data = {
    loadingState,
    error,
    products,
    currentPage,
    setCurrentPage,
    totalPages,
  };

  return (
    <div className=" sm:p-5 relative theme text-theme mt-10 sm:mt-20 lg:flex">
      <div className="hidden lg:block max-w-sm w-full">
        {/* Sidebar for bigger screens */}
        <FilterSortSidebar setQuery={setQuery} />
      </div>
      <div className="flex flex-col gap-3 w-full">
        {/* Sidebar for smaller screens */}
        <ProductPageHeader setQuery={setQuery} />
        <RenderProducts data={data} />
      </div>
    </div>
  );
};

export default Products;
