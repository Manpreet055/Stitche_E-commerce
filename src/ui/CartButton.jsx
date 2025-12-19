import React, { useContext, useEffect } from "react";
import { addProductToCart } from "../services/handleCart";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useUser } from "../context/UserDataProvider";
import { ShoppingCart } from "lucide-react";
const CartButton = ({ product }) => {
  const api = useAxiosPrivate();
  const { refetchCart } = useUser();
  const handleAddToCart = async () => {
    try {
      await addProductToCart(api, { product, qty: 1 });
      await refetchCart();
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
      className="rounded-2xl w-fit p-3 border border-gray-3 00"
    >
      <ShoppingCart></ShoppingCart>
    </button>
  );
};

export default CartButton;
