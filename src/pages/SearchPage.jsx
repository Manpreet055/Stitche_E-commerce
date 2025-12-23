import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import searchProducts from "../services/searchProducts";
import AsyncBoundary from "../ui/AsyncBoundary";
import ProductCard from "../ui/ProductCard";
import { motion } from "framer-motion";
import { container, item } from "../Animations/ListStagger";
import BackButton from "../ui/BackButton";

const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search); // parsing the query into useable format
  const query = params.get("q");
  const [products, setProducts] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");

  //   fetching the products with based on query
  useEffect(() => {
    searchProducts(query, setLoadingState, setError).then(setProducts);
  }, [query]);

  //   handling errors and loading states
  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }
  if (typeof products !== "object" || Object.keys(products).length === 0) {
    return <AsyncBoundary customMessage="No Products found." />;
  }
  return (
    <div className="sm:p-5 relative flex-col theme text-theme my-12 sm:my-20 lg:flex">
      <div className="flex items-center py-4">
        <span className="w-fit ">
          <BackButton text="Back" />
        </span>
        <span className="w-full text-lg sm:text-2xl text-center">
          Found These Products
        </span>
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
  );
};

export default SearchPage;
