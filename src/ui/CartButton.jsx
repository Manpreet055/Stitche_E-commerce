import React, { useContext, useEffect } from "react";
import { addProductToCart } from "../services/handleCart";
import { useAuth } from "../context/AuthProdvider";
const CartButton = ({ product }) => {
  const { refetchUser } = useAuth();

  const handleAddToCart = async () => {
    try {
      await addProductToCart({ product, qty: 1 });
      await refetchUser(); // Refetch to update cart state immediately
    } catch (error) {
      console.error("Failed to add to cart:", error);
      // Optionally show user feedback (e.g., toast)
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
