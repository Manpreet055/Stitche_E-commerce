import React, { useEffect } from "react";
import RenderOrdersHistory from "../layout/orders/RenderOrdersHistory";
import PaginationComp from "../ui/PaginationComp";
import useOrderHistory from "../hooks/useOrderHistory";
import AsyncBoundary from "../ui/AsyncBoundary";
import useBackNavigation from "../hooks/useBackNavigation";
const OrdersHistory = () => {
  const { BackButton } = useBackNavigation();
  const { currentPage, totalPages, setCurrentPage, loadingState, allOrders } =
    useOrderHistory();
  return (
    <section className="flex my-15 sm:my-23 items-center w-full h-screen text-theme flex-col">
      <div className="flex h-full flex-col w-full p-2 max-w-6xl ">
        {BackButton()}
        <h2 className="text-4xl font-bold my-3">Order History</h2>
        {loadingState ? (
          <AsyncBoundary loadingState={loadingState} errorState={null} />
        ) : (
          <>
            <RenderOrdersHistory allOrders={allOrders} />
            <div className="w-full flex justify-center">
              {totalPages > 0 && (
                <PaginationComp
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OrdersHistory;
