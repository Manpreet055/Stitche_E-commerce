import { Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { useUser } from "../context/UserDataProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const BuyButton = ({ product }) => {
  const api = useAxiosPrivate();
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(false);

  const { setCart, setError, user } = useUser();

  // add product to cart and navigate to orders page
  const handleAddToCart = async () => {
    setLoadingState(true);
    api
      .patch("/cart", { product, qty: 1 })
      .then((res) => {
        setCart(res.data?.cart); // setCart
        navigate("/orders"); // after that navigate to orders page
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoadingState(false));
  };
  return (
    <button
      disabled={loadingState}
      onClick={async (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!user) return navigate("/login");
        await handleAddToCart();
      }}
      className={`w-full py-2 rounded sm:max-w-xs theme-alt text-theme-alt text-nowrap hover:scale-[1.01] hover-transition `}
    >
      {loadingState ? (
        <span className="flex items-center justify-center gap-3">
          <Spinner className="h-4 w-fit" color="gray" />
          Buy Now
        </span>
      ) : (
        "Buy Now"
      )}
    </button>
  );
};

export default BuyButton;
