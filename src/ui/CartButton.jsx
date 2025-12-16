import React, { useContext, useEffect } from "react";
import { addProductToCart } from "../services/handleCart";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useUser } from "../context/UserDataProvider";
const CartButton = ({ product }) => {
  const api = useAxiosPrivate();
  const { refetchUser } = useUser();
  const handleAddToCart = async () => {
    try {
      await addProductToCart(api, { product, qty: 1 });
      await refetchUser();
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        handleAddToCart();
      }}
      className="rounded-2xl p-3 border"
    >
      Add to Cart{" "}
    </button>
  );
};

export default CartButton;
