import React from "react";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/header/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import ContextProvider from "./context/ContextProvider";
const App = () => {
  return (
    <ContextProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ContextProvider>
  );
};

export default App;
