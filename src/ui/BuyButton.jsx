import { Button } from "flowbite-react";
import React from "react";
import { useUser } from "../context/UserDataProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const BuyButton = ({ product, theme = "" }) => {
  const api = useAxiosPrivate();
  const navigate = useNavigate();
  const { refetchCart, setError } = useUser();

  // add product to cart and navigate to orders page
  const handleAddToCart = async () => {
    try {
      await api.patch("/cart", { product, qty: 1 });
      await refetchCart();
      navigate("/orders");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Button
      onClick={async (event) => {
        event.stopPropagation();
        await handleAddToCart();
      }}
      className={`w-full sm:max-w-xs btn-primary text-nowrap hover:scale-[1.01] ease-in-out transition-all ${theme}`}
    >
      Buy Now
    </Button>
  );
};

export default BuyButton;
