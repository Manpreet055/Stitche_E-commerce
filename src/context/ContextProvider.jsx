import React from "react";
import { ShowMenuContextProvider } from "./ShowMenuContextProvider";
import { AuthProvider } from "./AuthProdvider";
import { UserDataProvider } from "./UserDataProvider";
const ContextProvider = ({ children }) => {
  return (
    <ShowMenuContextProvider>
      <AuthProvider>
        <UserDataProvider>{children}</UserDataProvider>
      </AuthProvider>
    </ShowMenuContextProvider>
  );
};

export default ContextProvider;
