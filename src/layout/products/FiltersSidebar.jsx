import { Drawer } from "flowbite-react";
import { useState } from "react";
import FilterSortSidebar from "./FilterSortSidebar";
import { Filter, X } from "lucide-react";

const FiltersSidebar = ({ setQuery, query }) => {
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
      <div className="flex xl:hidden items-center gap-3 theme justify-center">
        {/* Toggle filters sidebar */}
        <button
          className=" theme-alt text-theme-alt py-2 px-4 rounded-2xl text-xs shadow-2xl mt-1 flex items-center gap-3"
          onClick={() => setIsOpen(true)}
        >
          Filters <Filter size={18} />
        </button>
      </div>

      <Drawer className="p-0" open={isOpen} onClose={handleClose}>
        <FilterSortSidebar query={query} setQuery={setQuery} />
      </Drawer>
    </>
  );
};

export default FiltersSidebar;
