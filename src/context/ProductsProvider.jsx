import React, { useEffect, useState } from "react";
import ProductContext from "./productsContext";
import handleApiError from "../services/handleApiError";
import axios from "axios";
const uri = import.meta.env.VITE_BASE_URI;

const ProductsProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
    sort: {
      sortField: "name",
      sortingOrder: "asc",
    },
    filters: {},
  });
  const fetchProducts = async () => {
    const { limit, sort, filters, page } = query;
    try {
      setLoadingState(true);
      const response = await axios.get(`${uri}/products/`, {
        params: {
          page,
          limit,
          sortField: sort.sortField,
          sortingOrder: sort.sortingOrder,
          ...filters,
        },
      });
      const data = response.data;
      setProducts(data.products);
      setTotalPages(data.totalPages);
    } catch (error) {
      handleApiError(error);
      setError(error.message);
      throw error;
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [query]);

  return (
    <ProductContext.Provider
      value={{
        page: query.page,
        loadingState,
        error,
        products,
        setProducts,
        setQuery,
        query,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
