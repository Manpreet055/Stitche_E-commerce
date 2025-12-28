import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { LogOut, ShoppingCart, User2, Settings2, History } from "lucide-react";
import { useUser } from "../context/UserDataProvider";
import { NavLink } from "react-router-dom";

const AvatarDropDown = ({ img }) => {
  const { user, logOutUser } = useUser();
  return (
    <Dropdown
      className="theme text-theme border border-gray-200 dark:border-gray-200"
      label={<Avatar className="w-10" alt="User settings" img={img} rounded />}
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <button>
          <NavLink className="flex gap-3 items-center" to="profile">
            <User2 />
            <span className="block text-sm">{user?.username}</span>
          </NavLink>
        </button>
      </DropdownHeader>

      <DropdownItem>
        <button>
          <NavLink to="cart" className="flex gap-3 items-center">
            <ShoppingCart />
            Cart
          </NavLink>
        </button>
      </DropdownItem>

      <DropdownItem>
        <button className="flex gap-3 items-center">
          <Settings2 />
          Settings
        </button>
      </DropdownItem>
      <DropdownItem>
        <button>
          <NavLink to="orders/history" className="flex gap-3 items-center">
            {" "}
            <History />
            Orders History
          </NavLink>
        </button>
      </DropdownItem>

      <DropdownDivider />
      <DropdownItem>
        <button className="flex gap-3 items-center" onClick={logOutUser}>
          {" "}
          <LogOut /> Log out
        </button>
      </DropdownItem>
    </Dropdown>
  );
};

export default AvatarDropDown;
