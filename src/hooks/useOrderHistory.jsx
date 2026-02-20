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
  const getOrderHistory = async (signal = null) => {
    try {
      setLoadingState(true);
      const response = await api.get(`/orders?limit=${7}&page=${currentPage}`, {
        signal,
      });
      const { orders, totalPages } = response.data;
      setAllOrders(orders);
      console.log(orders);
      setTotalPages(totalPages);
    } catch (error) {
      if (error.code === "ERR_CANCELED") return;
      setError(error.messages);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getOrderHistory(controller.signal);
    return () => {
      controller.abort();
    };
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
