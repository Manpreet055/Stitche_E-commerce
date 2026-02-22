import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import debounce from "../utils/debounce";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { buttonGroupTheme } from "../utils/customFlowbiteTheme";
import { ButtonGroup, Button, ThemeProvider } from "flowbite-react";
import { useUser } from "../context/UserDataProvider";
const Counter = ({
  productId = "",
  defaultqty = 1,
  size = " max-w-35",
  setQty,
}) => {
  const api = useAxiosPrivate();
  const { loadingState, cart, setCart, setError } = useUser();

  const findProductQtyInCart = cart.filter(
    (p) => p?.product?._id === productId,
  );

  const [quantity, setQuantity] = useState(
    findProductQtyInCart[0]?.qty ?? defaultqty,
  );

  const incValue = () => {
    if (quantity === 10) return;
    setQuantity((p) => p + 1);
    setQty((p) => p + 1);
  };
  const decValue = () => {
    if (quantity === 1) return;
    setQuantity((p) => p - 1);
    setQty((p) => p - 1);
  };

  const updateCartQty = (product, qty, signal) => {
    api
      .patch(`/cart/update`, { product, qty }, { signal })
      .then((res) => setCart(res.data?.cart))
      .catch((error) => {
        if (error.code === "ERR_CANCELED") return;
        setError(error.message);
      });
  };

  // Debounce the quantity update
  const debouncedUpdate = useMemo(
    () => debounce(updateCartQty, 500),
    [updateCartQty],
  );

  useEffect(() => {
    const controller = new AbortController();
    debouncedUpdate(productId, quantity, controller.signal); // Only call on changes after mount
    return () => {
      controller.abort();
    };
  }, [quantity]);

  return (
    <ButtonGroup
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      className={`w-full flex justify-evenly theme text-theme border-theme ${size} ${loadingState ? "cursor-progress" : "cursor-pointer"}`}
    >
      <ThemeProvider theme={buttonGroupTheme}>
        <Button
          color="primary"
          className="p-2 cursor-pointer sm:p-4"
          onClick={decValue}
        >
          -
        </Button>
        <p className="flex sm:text-base text-sm items-center px-2 md:px-6">
          {quantity}
        </p>
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
