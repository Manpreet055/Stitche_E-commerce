import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { useState } from "react";
import { useAuth } from "../context/AuthProdvider";

const AvatarDropDown = ({ img }) => {
  const [isAuth, setAuth] = useState(Boolean(localStorage.getItem("userId")));
  const { user } = useAuth();
  const handleLogOut = () => {
    localStorage.removeItem("userId");
    // setAuth(false);
    window.location.reload();
  };
  return (
    <Dropdown
      label={<Avatar alt="User settings" img={img} rounded />}
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <span className="block text-sm">{user?.username}</span>
        <span className="block truncate text-sm font-medium">
          {user?.email}
        </span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={handleLogOut}>Sign out</DropdownItem>
    </Dropdown>
  );
};

export default AvatarDropDown;
