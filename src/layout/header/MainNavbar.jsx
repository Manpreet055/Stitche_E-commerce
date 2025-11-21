import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import ShowMenuContextProvider from "../../context/ShowMenuContextProvider";
const MainNavbar = () => {
  return (
    <div className="fixed bg-white navbar w-full z-20  top-0">
      <ShowMenuContextProvider>
        <Navbar></Navbar>
        <MobileNav></MobileNav>
      </ShowMenuContextProvider>
    </div>
  );
};

export default MainNavbar;
