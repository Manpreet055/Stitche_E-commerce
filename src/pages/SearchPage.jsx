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
    const fetchResults = async () => {
      try {
        const data = await searchProducts(query, setLoadingState, setError);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchResults();
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
    <div className="w-full py-5 px-5 mt-10">
      <div className="flex py-4">
        <BackButton />
        <h2 className="w-full text-2xl font-semibold mb-6 text-center">
          Found These Products
        </h2>
      </div>
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
    </div>
  );
};

export default SearchPage;
