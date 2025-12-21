import React, { useState, useEffect } from "react";
import ProductCard from "../../ui/ProductCard";
import searchProducts from "../../services/searchProducts";
import AsyncBoundary from "../../ui/AsyncBoundary";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";

const SimilarProducts = ({ category }) => {
  const [products, setProducts] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");

  //   fetching the products with based on query
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await searchProducts(
          category,
          4,
          setLoadingState,
          setError,
        );
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchResults();
  }, []);

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
    <div className="w-full theme text-theme ">
      <h1 className="md:text-xl font-semibold text-center mb-4">
        YOU MIGHT ALSO LIKE THIS
      </h1>
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className="flex w-full justify-evenly hide-scrollbar py-2 overflow-x-auto max-w-screen gap-y-8 gap-x-6"
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

export default SimilarProducts;
