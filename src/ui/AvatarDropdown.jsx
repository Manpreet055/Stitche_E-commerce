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
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const AvatarDropDown = ({ img }) => {
  const { user, logOutUser } = useUser();
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
      <DropdownItem className="flex gap-3" onClick={logOutUser}>
        <LogOut /> Log out
      </DropdownItem>
    </Dropdown>
  );
};

export default AvatarDropDown;
