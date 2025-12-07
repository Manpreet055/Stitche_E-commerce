import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  createTheme,
  ThemeProvider,
} from "flowbite-react";
const Counter = () => {
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

  const [value, setValue] = useState(1);
  const incValue = () => {
    if (value === 10) return;
    setValue(value + 1);
  };
  const decValue = () => {
    if (value === 1) return;
    setValue(value - 1);
  };
  return (
    <ButtonGroup>
      <ThemeProvider theme={customTheme}>
        <Button color="primary" onClick={decValue}>
          -
        </Button>
        <p className="flex items-center px-6">{value}</p>
        <Button color="primary" onClick={incValue}>
          +
        </Button>
      </ThemeProvider>
    </ButtonGroup>
  );
};

export default Counter;
