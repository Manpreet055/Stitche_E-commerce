import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
const MainNavbar = () => {
  return (
    <div className="fixed sm:py-2 w-full theme text-theme z-20  top-0">
      <Navbar></Navbar>
    </div>
  );
};

export default MainNavbar;
