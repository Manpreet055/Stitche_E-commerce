import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Menu } from "lucide-react";
import SearchBar from "../header/SearchBar";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <DrawerHeader titleIcon={Home} title="Menu" />
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
              `hover-transition ${isActive ? "text-black dark:text-white" : "text-gray-500"}`
            }
          >
            Cart
          </NavLink>
        </DrawerItems>
      </Drawer>
    </>
  );
};

export default MobileNav;
