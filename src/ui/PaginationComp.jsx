import { Pagination, createTheme } from "flowbite-react";
import { customPaginationTheme } from "../utils/customFlowbiteTheme";

export function PaginationComp({ currentPage, setCurrentPage, totalPages }) {
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto py-6 sm:justify-center">
      <Pagination
        theme={customPaginationTheme}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}

export default PaginationComp;
