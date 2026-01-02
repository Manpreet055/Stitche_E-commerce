import React, { useContext, useEffect, useRef, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useUser } from "../../context/UserDataProvider";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const AddToCartButton = ({
  product,
  text = "",
  theme = "rounded h-fit w-fit flex gap-2 items-center p-2.5 border-theme",
}) => {
  const navigate = useNavigate();
  const api = useAxiosPrivate();
  const [loadingState, setLoadingState] = useState(false);
  const isRequesting = useRef(false);

  const { setCart, setError, user } = useUser();

  const handleAddToCart = async () => {
    if (isRequesting.current || loadingState) return;

    isRequesting.current = true;
    setLoadingState(true);

    try {
      const res = await api.patch("/cart", { product, qty: 1 });
      setCart(res.data?.cart);
    } catch (error) {
      setError(error.message);
    } finally {
      isRequesting.current = false;
      setLoadingState(false);
    }
  };
  return (
    <button
      disabled={loadingState}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!user) return navigate("/login");
        handleAddToCart();
      }}
      className={`${theme} ${loadingState ? "cursor-progress" : "cursor-pointer"}`}
    >
      {loadingState && <Spinner className="h-4 w-fit" color="gray" />}
      <ShoppingCart size={20} />
      <span className="text-sm xl:text-base">{text}</span>
    </button>
  );
};

export default AddToCartButton;
