import React from "react";
import DarkModeContextProvider from "./DarkModeContextProvider";
import ShowMenuContextProvider from "./ShowMenuContextProvider";

const ContextProvider = ({ children }) => {
  return (
    <DarkModeContextProvider>
      <ShowMenuContextProvider>{children}</ShowMenuContextProvider>
    </DarkModeContextProvider>
  );
};

export default ContextProvider;
