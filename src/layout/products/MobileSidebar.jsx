import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import FilterSortSidebar from "./FilterSortSidebar";
import { Filter } from "lucide-react";

const MobileSidebar = ({ setQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex lg:hidden items-center theme justify-center">
        <button
          className="btn-primary mt-1 border-theme flex items-center gap-3"
          onClick={() => setIsOpen(true)}
        >
          Filters <Filter size={18} />
        </button>
      </div>
      <Drawer className="p-0" open={isOpen} onClose={handleClose}>
        <FilterSortSidebar setQuery={setQuery} />
      </Drawer>
    </>
  );
};

export default MobileSidebar;
