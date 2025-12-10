import React, { useEffect, useState } from "react";
const uri = import.meta.env.VITE_BASE_URI;
import { fetchProducts } from "../services/fetchProductsData";

const useProducts = (initialLimit = "") => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState({
    limit: initialLimit,
    sort: {
      sortField: "name",
      sortingOrder: "asc",
    },
    filters: {},
  });

  useEffect(() => {
    fetchProducts(
      query,
      setLoadingState,
      setError,
      setTotalPages,
      setProducts,
      currentPage,
    );
  }, [query, currentPage]);

  return {
    limit: query.limit,
    currentPage,
    setCurrentPage,
    loadingState,
    error,
    products,
    setQuery,
    query,
    totalPages,
  };
};

export default useProducts;
