import React from "react";
import AsyncBoundary from "../../ui/AsyncBoundary";
import { container, item } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
import PaginationComp from "../../ui/PaginationComp";
import ProductCard from "../../ui/ProductCard";
const RenderProducts = ({ data }) => {
  const {
    loadingState,
    error,
    products,
    currentPage,
    setCurrentPage,
    totalPages,
  } = data;

  return (
    <div>
      {/* Async handling with loading ,errors and success display*/}
      {loadingState ? (
        <AsyncBoundary loadingState={true} errorState={null} />
      ) : error ? (
        <AsyncBoundary loadingState={false} errorState={error} />
      ) : !Array.isArray(products) || products.length === 0 ? (
        <AsyncBoundary customMessage="No product found." />
      ) : (
        <>
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
          <PaginationComp
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default RenderProducts;
