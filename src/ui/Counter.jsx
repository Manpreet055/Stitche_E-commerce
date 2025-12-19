import React, { useEffect, useMemo, useRef, useState } from "react";
import { updateCartQty } from "../services/handleCart";
import debounce from "../utils/debounce";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { buttonGroupTheme } from "../utils/customFlowbiteTheme";
import { ButtonGroup, Button, ThemeProvider } from "flowbite-react";
const Counter = ({ productId = "", defaultqty = 1 }) => {
  const api = useAxiosPrivate();

  const hasInteracted = useRef(false);
  const [quantity, setQuantity] = useState(defaultqty);

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

  // Debounce the quantity update
  const debouncedUpdate = useMemo(
    () => debounce(updateCartQty, 500),
    [updateCartQty],
  );

  useEffect(() => {
    if (!hasInteracted.current) return;
    debouncedUpdate(api, productId, quantity); // Only call on changes after mount
  }, [quantity]);

  return (
    <ButtonGroup
      onClick={(event) => event.stopPropagation()}
      className="h-fit w-fit theme text-theme border dark:border-gray-500 border-gray-300 "
    >
      <ThemeProvider theme={buttonGroupTheme}>
        <Button className="p-2" color="primary" onClick={decValue}>
          -
        </Button>
        <p className="flex items-center px-2 md:px-6">{quantity}</p>
        <Button className="p-2" color="primary" onClick={incValue}>
          +
        </Button>
      </ThemeProvider>
    </ButtonGroup>
  );
};

export default Counter;
