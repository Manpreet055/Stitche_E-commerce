import React from "react";

import MainFooter from "./layout/footer/MainFooter";
import MainNavbar from "./layout/header/MainNavbar";
import { Outlet } from "react-router-dom";
import ApiContextProvider from "./context/ApiContextProvider";
import SelectedProductContextProvider from "./context/SelectedProductContextProvider";
import DarkModeContextProvider from "./context/DarkModeContextProvider";
const App = () => {
  
  return (
    <div>
      <DarkModeContextProvider>
        <header className="mb-12">
          <MainNavbar></MainNavbar>
        </header>
        <main>
          <SelectedProductContextProvider>
            <ApiContextProvider>
              <Outlet />
            </ApiContextProvider>
          </SelectedProductContextProvider>
        </main>
        <hr className="text-gray-300 shadow-2xl" />
        <footer>
          <MainFooter></MainFooter>
        </footer>
      </DarkModeContextProvider>
    </div>
  );
};

export default App;
