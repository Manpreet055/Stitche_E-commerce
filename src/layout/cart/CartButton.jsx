import React, { useContext, useEffect } from "react";
import { addProductToCart } from "../../services/handleCart";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useUser } from "../../context/UserDataProvider";
import { ShoppingCart } from "lucide-react";
const CartButton = ({ product, text = "" }) => {
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
      className="rounded  w-fit flex gap-2 items-center py-2 px-3  border-theme"
    >
      <ShoppingCart />
      <span className="xl:text-lg">{text}</span>
    </button>
  );
};

export default CartButton;
