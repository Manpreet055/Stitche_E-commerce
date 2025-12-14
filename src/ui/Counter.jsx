import React, { useEffect, useState } from "react";
import { updateCartQty } from "../services/handleCart";

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
  const [quantity, setQuantity] = useState(defaultqty);

  const incValue = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };
  const decValue = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    updateCartQty(productId, quantity);
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
