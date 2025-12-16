import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { useUser } from "../context/UserDataProvider";

const AvatarDropDown = ({ img }) => {
  const { user } = useUser();
  const handleLogOut = () => {
    console.log("LogOut");
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
      <DropdownItem className="flex gap-3" onClick={handleLogOut}>
        <LogOut /> Log out
      </DropdownItem>
    </Dropdown>
  );
};

export default AvatarDropDown;
