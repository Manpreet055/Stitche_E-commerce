import React, { useEffect, useMemo, useRef, useState } from "react";
import { updateCartQty } from "../services/handleCart";
import { useAuth } from "../context/AuthProdvider";
import debounce from "../utils/debounce";

import {
  ButtonGroup,
  Button,
  createTheme,
  ThemeProvider,
} from "flowbite-react";
const Counter = ({ productId = "", defaultqty = 1 }) => {
  const customTheme = createTheme({
    button: {
      color: {
        primary: "border-none",
        secondary: "bg-blue-500 hover:bg-blue-600",
      },
      size: {
        lg: "px-6 py-3 text-lg",
      },
    },
  });
  const { accessToken } = useAuth();
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
    debouncedUpdate(accessToken, productId, quantity); // Only call on changes after mount
  }, [quantity]);

  return (
    <ButtonGroup
      onClick={(event) => event.stopPropagation()}
      className="h-fit w-fit "
    >
      <ThemeProvider theme={customTheme}>
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
