import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserDataProvider";
import useAxiosPrivate from "./useAxiosPrivate";
import orderDataGenerator from "../utils/orderDataGenerator";
const useOrders = () => {
  const { cart, user, setCart } = useUser();
  const api = useAxiosPrivate();
  const { orderData } = orderDataGenerator(cart, user); //random order data

  // States and toast texts
  const [loadingState, setLoadingState] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");

  const placeOrder = async () => {
    try {
      setLoadingState(true);
      const response = await api.post("/orders", orderData);
      if (response.status === 200) {
        setToast("Order Placed !!");
        setCart([]);
        setTimeout(() => {
          setIsOrderPlaced(true);
        }, 500);
      }
    } catch (error) {
      setToast(error.message);
      setError(error.message);
    } finally {
      setLoadingState(false);
    }
  };

  return {
    placeOrder,
    loadingState,
    toast,
    isOrderPlaced,
    setIsOrderPlaced,
    error,
  };
};

export default useOrders;
