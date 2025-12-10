import React from "react";

import MainFooter from "./layout/footer/MainFooter";
import MainNavbar from "./layout/header/MainNavbar";
import { Outlet } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
const App = () => {
  return (
    <ContextProvider>
      <div>
        <header className="">
          <MainNavbar></MainNavbar>
        </header>
        <main>
          <Outlet />
        </main>
        <hr className="text-gray-300 shadow-2xl" />
        <footer>
          <MainFooter></MainFooter>
        </footer>
      </div>
    </ContextProvider>
  );
};

export default App;
