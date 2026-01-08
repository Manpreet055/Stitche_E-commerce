import React, { useEffect, useMemo, useRef, useState } from "react";
import debounce from "../utils/debounce";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { buttonGroupTheme } from "../utils/customFlowbiteTheme";
import { ButtonGroup, Button, ThemeProvider } from "flowbite-react";
import { useUser } from "../context/UserDataProvider";
const Counter = ({ productId = "", defaultqty = 1 }) => {
  const api = useAxiosPrivate();
  const { loadingState, cart, setCart, setError } = useUser();

  const findProductQtyInCart = cart.filter(
    (p) => p?.product?._id === productId,
  );

  const hasInteracted = useRef(false);
  const [quantity, setQuantity] = useState(
    findProductQtyInCart[0]?.qty ?? defaultqty,
  );

  const incValue = () => {
    hasInteracted.current = true;
    if (quantity === 10) return;
    setQuantity((p) => p + 1);
  };
  const decValue = () => {
    hasInteracted.current = true;

    if (quantity === 1) return;
    setQuantity((p) => p - 1);
  };

  const updateCartQty = (product, qty) => {
    api
      .patch(`/cart/update`, { product, qty })
      .then((res) => setCart(res.data?.cart))
      .catch((error) => setError(error.message));
  };

  // Debounce the quantity update
  const debouncedUpdate = useMemo(
    () => debounce(updateCartQty, 500),
    [updateCartQty],
  );

  useEffect(() => {
    if (!hasInteracted.current) return;
    debouncedUpdate(productId, quantity); // Only call on changes after mount
  }, [quantity]);

  return (
    <ButtonGroup
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      className={`w-fit theme text-theme border-theme ${loadingState ? "cursor-progress" : "cursor-pointer"}`}
    >
      <ThemeProvider theme={buttonGroupTheme}>
        <Button
          color="primary"
          className="p-2 cursor-pointer sm:p-4"
          onClick={decValue}
        >
          -
        </Button>
        <p className="flex  items-center px-4 md:px-6">{quantity}</p>
        <Button
          color="primary"
          className="p-2 cursor-pointer sm:p-4"
          onClick={incValue}
        >
          +
        </Button>
      </ThemeProvider>
    </ButtonGroup>
  );
};

export default Counter;
