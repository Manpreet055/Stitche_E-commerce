import { Pagination } from "flowbite-react";
import { customPaginationTheme } from "../utils/customFlowbiteTheme";

export function PaginationComp({ currentPage, setCurrentPage, totalPages }) {
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex py-6 justify-center">
      <Pagination
        theme={customPaginationTheme}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
        previousLabel="Prev"
      />
    </div>
  );
}

export default PaginationComp;
