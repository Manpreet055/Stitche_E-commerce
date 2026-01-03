import { Avatar, Drawer, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Menu, Power } from "lucide-react";
import SearchBar from "./SearchBar";
import { useUser } from "../../context/UserDataProvider";
import ProfileSkeletonLoader from "../../ui/ProfileSkeletonLoader";
const Sidebar = () => {
  const { user, loadingState, cart, logOutUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const cartItemsCount = cart?.length || 0;

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex md:hidden   items-center justify-center">
        <button className="mt-2" onClick={() => setIsOpen(true)}>
          <Menu size={30} />
        </button>
      </div>
      <Drawer
        className="theme text-theme flex flex-col gap-6"
        open={isOpen}
        onClose={handleClose}
      >
        <DrawerItems>
          {loadingState ? (
            <ProfileSkeletonLoader />
          ) : !user ? (
            <NavLink
              to="login"
              className={() =>
                `  border text-sm  border-gray-300 text-nowrap transition-all ease-in-out py-2 px-4 rounded`
              }
            >
              LogIn{" "}
            </NavLink>
          ) : (
            <NavLink to="profile" className="w-full flex items-center  gap-5">
              <Avatar rounded img={user?.profile?.avatar} />{" "}
              <span className="text-lg font-bold">{user?.username}</span>
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
              `flex w-full  font-medium rounded-lg hover-transition ${
                isActive
                  ? "text-theme-alt theme-alt px-4 py-3 "
                  : "text-theme theme"
              }`
            }
          >
            Home
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex w-full  font-medium rounded-lg hover-transition ${
                isActive
                  ? "text-theme-alt theme-alt px-4 py-3 "
                  : "text-theme theme"
              }`
            }
          >
            Products
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex w-full  font-medium rounded-lg hover-transition ${
                isActive
                  ? "text-theme-alt theme-alt px-4 py-3 "
                  : "text-theme theme"
              }`
            }
          >
            About Us
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex w-full  font-medium rounded-lg hover-transition ${
                isActive
                  ? "text-theme-alt theme-alt px-4 py-3 "
                  : "text-theme theme"
              }`
            }
          >
            Contact
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          <NavLink
            to="orders/history"
            className={({ isActive }) =>
              `flex w-full  font-medium rounded-lg hover-transition ${
                isActive
                  ? "text-theme-alt theme-alt px-4 py-3 "
                  : "text-theme theme"
              }`
            }
          >
            {" "}
            Orders History
          </NavLink>
        </DrawerItems>
        <DrawerItems>
          {" "}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex w-full items-center justify-between  font-medium rounded-lg hover-transition ${
                isActive
                  ? "text-theme-alt theme-alt px-4 py-3 "
                  : "text-theme theme"
              }`
            }
          >
            Cart
            <span className=" text-xs border-theme text-center p-0.5 px-2 rounded-full mr-10">
              {cartItemsCount}
            </span>
          </NavLink>
        </DrawerItems>
        {user && (
          <DrawerItems>
            <button
              className="btn-primary text-sm flex gap-2 items-center border border-red-500"
              onClick={logOutUser}
            >
              <Power size={18} />
              Logout
            </button>
          </DrawerItems>
        )}
      </Drawer>
    </>
  );
};

export default Sidebar;
