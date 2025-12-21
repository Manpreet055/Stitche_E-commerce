import {
  Avatar,
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
} from "flowbite-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Menu, Power } from "lucide-react";
import SearchBar from "../header/SearchBar";
import { useUser } from "../../context/UserDataProvider";
const MobileNav = () => {
  const { user, cart, logOutUser } = useUser();
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const cartItemsCount = cart?.length || 0;

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex md:hidden   items-center justify-center">
        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
      </div>
      <Drawer
        className="theme text-theme flex flex-col gap-6"
        open={isOpen}
        onClose={handleClose}
      >
        <DrawerItems>
          {user ? (
            <div className="w-full flex items-center  gap-5">
              <Avatar rounded img={user?.profile?.avatar} />{" "}
              <span className="text-lg font-bold">{user?.username}</span>
            </div>
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
        </DrawerItems>{" "}
        <DrawerItems>
          <SearchBar isDrawer />
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"} `
            }
          >
            Home
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"}`
            }
          >
            Products
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"}`
            }
          >
            About Us
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"}`
            }
          >
            Contact
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover-transition items-center flex w-full justify-between ${isActive ? "text-black dark:text-white" : "text-gray-500"}`
            }
          >
            Cart
            <span className="theme-alt text-theme-alt h-6 text-center w-6 rounded-full mr-10">
              {cartItemsCount}
            </span>
          </NavLink>
        </DrawerItems>
        {user && (
          <DrawerItems>
            <button
              className="btn-primary flex gap-2 items-center border border-red-400"
              onClick={logOutUser}
            >
              <Power size={16} />
              Logout
            </button>
          </DrawerItems>
        )}
      </Drawer>
    </>
  );
};

export default MobileNav;
