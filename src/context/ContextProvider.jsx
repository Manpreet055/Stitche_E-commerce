import React from "react";
import { AuthProvider } from "./AuthProdvider";
import { UserDataProvider } from "./UserDataProvider";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserDataProvider>{children}</UserDataProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
