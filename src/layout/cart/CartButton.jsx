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
      await api.patch("/cart", { product, qty: 1 });
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
      className="rounded h-fit w-fit flex gap-2 items-center p-2.5  border-theme"
    >
      <ShoppingCart size={20} />
      <span className="text-sm xl:text-base">{text}</span>
    </button>
  );
};

export default CartButton;
