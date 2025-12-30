import React, { useContext, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useUser } from "../../context/UserDataProvider";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
const AddToCartButton = ({ product, text = "" }) => {
  const navigate = useNavigate();
  const api = useAxiosPrivate();
  const { refetchCart, user } = useUser();

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
        event.preventDefault();
        event.stopPropagation();
        if (!user) return navigate("/login");
        handleAddToCart();
      }}
      className="rounded h-fit w-fit flex gap-2 items-center p-2.5  border-theme"
    >
      <ShoppingCart size={20} />
      <span className="text-sm xl:text-base">{text}</span>
    </button>
  );
};

export default AddToCartButton;
