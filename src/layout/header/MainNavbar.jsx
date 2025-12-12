import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
const MainNavbar = () => {
  return (
    <div className="fixed navbar bg-black/20 backdrop-blur-2xl w-full z-20  top-0">
      <Navbar></Navbar>
      <MobileNav></MobileNav>
    </div>
  );
};

export default MainNavbar;
