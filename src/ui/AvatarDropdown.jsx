import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";

const AvatarDropDown = ({ img }) => {
  return (
    <Dropdown
      label={<Avatar alt="User settings" img={img} rounded />}
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
};

export default AvatarDropDown;
