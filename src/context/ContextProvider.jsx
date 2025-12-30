import React from "react";
import { AuthProvider } from "./AuthProdvider";
import { UserDataProvider } from "./UserDataProvider";

// This is the context container which contains
// all the contexts and return a single component to wrap the whole
// app inside to improve readability of App.jsx

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserDataProvider>{children}</UserDataProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
