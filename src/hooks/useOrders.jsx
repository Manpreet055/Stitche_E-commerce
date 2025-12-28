import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserDataProvider";
import useAxiosPrivate from "./useAxiosPrivate";
import orderDataGenerator from "../utils/orderDataGenerator";
const useOrders = () => {
  const { cart, user } = useUser();
  const api = useAxiosPrivate();
  const [allOrders, setAllOrders] = useState([]);
  const { orderData } = orderDataGenerator(cart, user); //random order data

  // States and toast texts
  const [loadingState, setLoadingState] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [toast, setToast] = useState("");

  // API call in this function
  const placeOrder = async () => {
    try {
      setLoadingState(true);
      const response = await api.post("/orders", orderData);
      if (response.status === 200) {
        setToast("Order Placed !!");
        setTimeout(() => {
          setIsOrderPlaced(true);
        }, 500);
      }
    } catch (error) {
      setToast(error.message);
    } finally {
      setLoadingState(false);
    }
  };

  //Pagination stuff
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // fetch OrdersHistory
  const getOrderHistory = async () => {
    try {
      setLoadingState(true);
      const response = await api.get(`/orders?limit=${7}&page=${currentPage}`);
      const data = response.data;
      setAllOrders(data?.orders);
      setTotalPages(data?.totalPages);
    } catch (error) {
      console.log(error.messages);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    getOrderHistory();
  }, [currentPage]);

  return {
    totalPages,
    currentPage,
    setCurrentPage,
    placeOrder,
    loadingState,
    toast,
    isOrderPlaced,
    setIsOrderPlaced,
    allOrders,
    getOrderHistory,
  };
};

export default useOrders;
