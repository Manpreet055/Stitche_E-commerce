import React, { useState } from "react";
import { useUser } from "../context/UserDataProvider";
import useAxiosPrivate from "./useAxiosPrivate";

const useOrders = () => {
  const { cart, user } = useUser();
  const api = useAxiosPrivate();

  // States and toast texts
  const [loadingState, setLoadingState] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [toast, setToast] = useState("");

  // generating totalprice , discount, etc.

  const date = Date.now(); //Current date for order details
  const randomOrderId = Math.floor(1000000 + Math.random() * 9000000);
  const sumofProductsPrice = cart
    .reduce((acc, p) => acc + p?.product?.price * p.qty, 0)
    .toFixed(2);
  const priceAfterDiscount = Number(sumofProductsPrice * 0.9).toFixed(2);
  const deliveryFee = Number(sumofProductsPrice * 0.01).toFixed(2);
  const discount = Number((sumofProductsPrice - priceAfterDiscount).toFixed(2));
  const subTotal = (
    sumofProductsPrice * 0.9 +
    sumofProductsPrice * 0.01
  ).toFixed(2);

  // generating random payment methods and transaction and tracking id
  const paymentMethod = ["card", "paypal", "cod"];
  const randomPaymentMethod = Math.floor(Math.random() * paymentMethod.length);
  const transactionId = Math.floor(100000000 + Math.random() * 900000000);
  const trackingId = Math.floor(100000 + Math.random() * 900000);

  // User address
  const userAddress = user?.profile?.address ?? {};
  const { city, postalCode, street, country } = userAddress;

  // Creating orderData
  const orderData = {
    products: user?.cart,
    totalAmount: sumofProductsPrice,
    discount,
    payment: {
      method: paymentMethod[randomPaymentMethod],
      transactionId,
    },
    shipping: {
      city,
      postalCode,
      street,
      country,
      trackingId,
    },
    orderStatus: "pending",
  };

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

      console.log(response.data?.order);
    } catch (error) {
      setToast(error.message);
    } finally {
      setLoadingState(false);
    }
  };

  return {
    priceAfterDiscount,
    subTotal,
    placeOrder,
    discount,
    deliveryFee,
    sumofProductsPrice,
    loadingState,
    toast,
    isOrderPlaced,
    setIsOrderPlaced,
    date,
    randomOrderId,
  };
};

export default useOrders;
