import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { useMenu } from "../../context/ShowMenuContextProvider";
import { useAuth } from "../../context/AuthProdvider";
import AvatarDropDown from "../../ui/AvatarDropdown";
const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const { user } = useAuth();
  const cartItemsCount = user?.cart.length;
  const userId = localStorage.getItem("userId");
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
              `hover-transition ${isActive ? "text-white" : "text-gray-500"} `
            }
          >
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-white" : "text-gray-500"}`
            }
          >
            Products
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-white" : "text-gray-500"}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-white" : "text-gray-500"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <NavLink to="cart" className="flex flex-col items-end">
          <span className="rounded-full px-1 text-xs"> {cartItemsCount}</span>
          <ShoppingCart />
        </NavLink>
        {userId ? (
          <AvatarDropDown img={user?.profile?.avatar} />
        ) : (
          <NavLink
            to="login"
            className={() =>
              `hover-transition  border bg-primary border-gray-300 text-nowrap hover-transition py-2 px-4 rounded-xl`
            }
          >
            Sign Up
          </NavLink>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
