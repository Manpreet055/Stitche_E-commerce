import React, { useEffect, useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

const useOrderHistory = () => {
  const api = useAxiosPrivate();
  //Pagination states
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [allOrders, setAllOrders] = useState([]);

  // fetch OrdersHistory
  const getOrderHistory = async () => {
    try {
      setLoadingState(true);
      const response = await api.get(`/orders?limit=${7}&page=${currentPage}`);
      const data = response.data;
      setAllOrders(data?.orders);
      setTotalPages(data?.totalPages);
    } catch (error) {
      setError(error.messages);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    getOrderHistory();
  }, [currentPage]);
  return {
    setCurrentPage,
    currentPage,
    error,
    loadingState,
    totalPages,
    allOrders,
    getOrderHistory,
  };
};

export default useOrderHistory;
