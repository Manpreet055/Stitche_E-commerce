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
import { toast } from "react-toastify";

const AvatarDropDown = ({ img }) => {
  const notify = () => toast("This Feature is coming soon");
  const { user, logOutUser } = useUser();
  return (
    <Dropdown
      className="theme text-theme border border-gray-200 dark:border-gray-200"
      label={
        <Avatar
          className="w-10 h-10 object-cover"
          alt="User settings"
          img={img}
          rounded
        />
      }
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <NavLink className="flex gap-3 items-center" to="profile">
          <User2 />
          <span className="block text-sm">{user?.username}</span>
        </NavLink>
      </DropdownHeader>

      <DropdownItem>
        <NavLink to="cart" className="flex gap-3 items-center">
          <ShoppingCart />
          Cart
        </NavLink>
      </DropdownItem>

      <DropdownItem onClick={notify} className="flex gap-3 items-center">
        <Settings2 />
        Settings
      </DropdownItem>
      <DropdownItem>
        <NavLink to="orders/history" className="flex gap-3 items-center">
          {" "}
          <History />
          Orders History
        </NavLink>
      </DropdownItem>

      <DropdownDivider />
      <DropdownItem className="flex gap-3 items-center" onClick={logOutUser}>
        {" "}
        <LogOut /> Log out
      </DropdownItem>
    </Dropdown>
  );
};

export default AvatarDropDown;
