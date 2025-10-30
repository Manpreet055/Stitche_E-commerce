import React from "react";

import MainFooter from "./Pages/MainFooter";
import MainNavbar from "./Pages/MainNavbar";
import { Outlet } from "react-router-dom";
import ApiContextProvider from "./Context/ApiContextProvider";
import SelectedProductContextProvider from "../src/Context/SelectedProductContextProvider";
import DarkModeContextProvider from "./Context/DarkModeContextProvider";
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
