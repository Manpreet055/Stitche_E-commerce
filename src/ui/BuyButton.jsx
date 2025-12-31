import { Button } from "flowbite-react";
import React from "react";
import { useUser } from "../context/UserDataProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const BuyButton = ({ product, theme = "" }) => {
  const api = useAxiosPrivate();
  const navigate = useNavigate();
  const { setCart, setError, user } = useUser();

  // add product to cart and navigate to orders page
  const handleAddToCart = async () => {
    api
      .patch("/cart", { product, qty: 1 })
      .then((res) => {
        setCart(res.data?.cart); // setCart
        navigate("/orders"); // after that navigate to orders page
      })
      .catch((error) => setError(error.message));
  };
  return (
    <Button
      onClick={async (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!user) return navigate("/login");
        await handleAddToCart();
      }}
      className={`w-full sm:max-w-xs btn-primary text-nowrap hover:scale-[1.01] ease-in-out transition-all ${theme}`}
    >
      Buy Now
    </Button>
  );
};

export default BuyButton;
