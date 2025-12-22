import React, { useContext, useState } from "react";

const SortFilterContext = React.createContext();
export const SortFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ sortField: "", sortingOrder: "" });

  return (
    <SortFilterContext.Provider value={{ sort, setSort, filters, setFilters }}>
      {children}
    </SortFilterContext.Provider>
  );
};

export const useSortFilter = () => useContext(SortFilterContext);
