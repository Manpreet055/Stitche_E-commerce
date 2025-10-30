import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Droplet, Menu } from "lucide-react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import ShowMenuContext from "../../Context/ShowMenu";
import SearchBar from "./SearchBar";
import DarkModeContext from "../../Context/DarkModeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(ShowMenuContext);
  const { setDarkMode, darkMode } = useContext(DarkModeContext);
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1.5,
      }}
      className="py-3 px-6 flex justify-between  z-20"
    >
      <img
        src="/src/assets/Chromojet_logo.webp"
        className="h-11 w-fit"
        alt=""
      />
      <SearchBar></SearchBar>
      <button
        onClick={() => setIsMenuOpen(true)}
        className="flex xl:hidden items-center justify-center font-semibold hover-transition"
      >
        <Menu className="" />
      </button>
      {isMenuOpen && <MobileNav></MobileNav>}
      <ul className=" hidden xl:flex justify-center items-center gap-4 lg:gap-10  font-semibold px-3">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-red-700" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-red-700" : ""}`
            }
          >
            Products
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-red-700" : ""}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-red-700" : ""}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? (
              <span className="flex gap-1">
                <Sun /> Light
              </span>
            ) : (
              <span className="flex gap-1">
                <Moon /> Dark
              </span>
            )}
          </button>
        </li>
        <li className="">
          <NavLink
            className={() =>
              `hover-transition border border-gray-300 text-nowrap hover-transition py-2 px-4 rounded-xl`
            }
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
