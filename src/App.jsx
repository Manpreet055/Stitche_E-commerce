import React from "react";
import MainFooter from "./layout/footer/MainFooter";
import MainNavbar from "./layout/header/MainNavbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
const App = () => {
  const location = useLocation();
  return (
    <ContextProvider>
      <div>
        <header
          className={
            location.pathname.includes("login") ||
            location.pathname.includes("signup")
              ? "hidden"
              : ""
          }
        >
          <MainNavbar></MainNavbar>
        </header>
        <main>
          <Outlet />
        </main>
        <hr className="text-gray-300 shadow-2xl" />
        <footer
          className={
            location.pathname.includes("login") ||
            location.pathname.includes("signup")
              ? "hidden"
              : ""
          }
        >
          <MainFooter></MainFooter>
        </footer>
      </div>
    </ContextProvider>
  );
};

export default App;
