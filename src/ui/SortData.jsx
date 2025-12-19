import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
const SortOrders = ({ setQuery, sortOptions }) => {
  const applySort = (field, order) => {
    setQuery((prev) => ({
      ...prev,
      sort: {
        sortField: field,
        sortingOrder: order,
      },
      page: 1,
    }));
  };
  return (
    <div className="p-4 justify-evenly theme text-theme items-center flex">
      <Dropdown className="theme text-theme" label="Sort" inline>
        {sortOptions.map((option, index) => (
          <DropdownItem
            key={index}
            onClick={() => applySort(option.field, option.order)}
          >
            {option.title}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
};

export default SortOrders;
