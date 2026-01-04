import React from "react";
import { AuthProvider } from "./AuthProdvider";
import { UserDataProvider } from "./UserDataProvider";
import { ToastContainer } from "react-toastify";

const ContextProvider = ({ children }) => {
  const theme =
    localStorage.getItem("flowbite-theme-mode") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  return (
    <AuthProvider>
      <ToastContainer
        toastClassName="rounded-2xl theme-alt text-theme-alt "
        limit={1}
        stacked
        theme={theme}
      />

      <UserDataProvider>{children}</UserDataProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
