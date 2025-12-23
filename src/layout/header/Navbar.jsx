import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { useUser } from "../../context/UserDataProvider";
import AvatarDropDown from "../../ui/AvatarDropdown";
const Navbar = () => {
  const { cart, user } = useUser();
  const cartItemsCount = cart?.length || 0;

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
      className="py-3 px-6 flex justify-between items-center  z-20"
    >
      <h1 className="text-3xl sm:text-4xl text-nowrap font-bold">Stitche</h1>

      <ul className=" w-full hidden md:flex md:justify-evenly lg:justify-center  items-center gap-4 lg:gap-10  font-semibold px-3">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"} `
            }
          >
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"}`
            }
          >
            Products
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <NavLink
          to="cart"
          className={({ isActive }) =>
            `hover-transition flex flex-col items-center ${isActive ? "text-black dark:text-white" : "text-gray-500"} `
          }
        >
          <span className="px-1 text-[10px] sm:text-sm">
            {" "}
            {cartItemsCount ?? 0}
          </span>
          <ShoppingCart />
        </NavLink>
        <div className="hidden md:block">
          {user ? (
            <AvatarDropDown img={user?.profile?.avatar} />
          ) : (
            <NavLink
              to="login"
              className={() =>
                `  border text-sm  border-gray-300 text-nowrap transition-all ease-in-out py-2 px-4 rounded`
              }
            >
              LogIn{" "}
            </NavLink>
          )}
        </div>
        <MobileNav />
      </div>
    </motion.nav>
  );
};

export default Navbar;
