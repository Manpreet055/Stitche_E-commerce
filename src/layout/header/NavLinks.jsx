import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { motion } from "framer-motion";
import MobileNav from "./Sidebar";
import { useUser } from "../../context/UserDataProvider";
import AvatarDropDown from "../../ui/AvatarDropdown";
import { DarkThemeToggle } from "flowbite-react";

const NavLinks = () => {
  const { cart, user } = useUser();
  const cartItemsCount = cart?.length ?? 0;

  return (
    <nav className="py-3 px-6 flex justify-between items-center  z-20">
      <h1 className="text-3xl sm:text-4xl text-nowrap poppins font-bold ">
        Stitche
      </h1>

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
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="grid grid-cols-3 place-items-center sm:gap-4 ">
        <DarkThemeToggle className="border-none sm:mr-0 bg-none place-self-center" />
        <NavLink
          to="cart"
          className={({ isActive }) =>
            `hover-transition    flex flex-col mb-2 items-center ${isActive ? "text-black dark:text-white" : "text-gray-500"} `
          }
        >
          <span className="w-3 text-theme h-3 grid place-items-center text-[10px]">
            {" "}
            {cartItemsCount}
          </span>
          <ShoppingCart size={23} />
        </NavLink>
        <div className="hidden md:block">
          {user ? (
            <AvatarDropDown
              className="object-cover "
              img={user?.profile?.avatar}
            />
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
    </nav>
  );
};

export default NavLinks;
