import React from "react";
import { ShowMenuContextProvider } from "./ShowMenuContextProvider";
import { AuthProvider } from "./AuthProdvider";
const ContextProvider = ({ children }) => {
  return (
    <ShowMenuContextProvider>
      <AuthProvider>{children}</AuthProvider>
    </ShowMenuContextProvider>
  );
};

export default ContextProvider;
