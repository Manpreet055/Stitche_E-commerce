import React from "react";
import Navbar from "../Components/Header/Navbar";
import MobileNav from "../Components/Header/MobileNav";
import ShowMenuContextProvider from "../Context/ShowMenuContextProvider";
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
