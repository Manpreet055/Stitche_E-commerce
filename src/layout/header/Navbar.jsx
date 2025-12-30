import React from "react";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <header
      className={`fixed sm:py-2 w-full theme text-theme z-20  top-0 ${
        (pathname === "/login" || pathname === "/signup") && "hidden"
      }`}
    >
      <NavLinks />
    </header>
  );
};

export default Navbar;
