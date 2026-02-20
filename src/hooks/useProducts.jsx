import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/fetchProductsData";

const useProducts = (initialLimit = 8) => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState({
    limit: initialLimit,
    sort: {
      sortField: "",
      sortingOrder: "",
    },
    filters: {},
  });

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(
      query,
      setLoadingState,
      setError,
      setTotalPages,
      setProducts,
      currentPage,
      controller.signal,
    );
    return () => {
      controller.abort();
    };
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
