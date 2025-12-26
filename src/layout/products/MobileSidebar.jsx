import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import FilterSortSidebar from "./FilterSortSidebar";
import { Filter, X } from "lucide-react";

const MobileSidebar = ({ setQuery, query }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  // Reset the filters and sort
  const clearFilters = () => {
    setQuery((prev) => ({
      ...prev,
      sort: {
        sortField: "",
        sortingOrder: "",
      },
      filters: {},
    }));
  };

  const isSorted =
    query.sort.sortField !== "" || query.sort.sortingOrder !== "";

  return (
    <>
      <div className="flex lg:hidden items-center gap-3 theme justify-center">
        {/* Toggle filters sidebar */}
        <button
          className="btn-primary text-xs mt-1 border-theme flex items-center gap-3"
          onClick={() => setIsOpen(true)}
        >
          Filters <Filter size={18} />
        </button>

        {/* Clear Filters Button */}
        {(isSorted || Object.keys(query?.filters).length !== 0) && (
          <button
            className="p-2 text-nowrap rounded-lg theme-alt text-theme-alt mt-1 text-xs flex items-center gap-1 border-theme"
            onClick={clearFilters}
          >
            <X size={15} /> Clear Filters
          </button>
        )}
      </div>

      <Drawer className="p-0" open={isOpen} onClose={handleClose}>
        <FilterSortSidebar query={query} setQuery={setQuery} />
      </Drawer>
    </>
  );
};

export default MobileSidebar;
