import React, { useEffect } from "react";
import RenderOrders from "../layout/orders/RenderOrders";
import BackButton from "../ui/BackButton";
import PaginationComp from "../ui/PaginationComp";
import useOrders from "../hooks/useOrders";
import AsyncBoundary from "../ui/AsyncBoundary";
const OrdersHistory = () => {
  const { currentPage, totalPages, setCurrentPage, loadingState, allOrders } =
    useOrders();
  return (
    <div className="flex mt-23 h-150 w-full text-theme flex-col">
      <BackButton text="Back" />
      <h2 className="text-4xl font-bold my-3">Order History</h2>
      <div className="flex h-full flex-col w-full justify-between ">
        {loadingState ? (
          <AsyncBoundary loadingState={loadingState} errorState={null} />
        ) : (
          <>
            <RenderOrders allOrders={allOrders} />
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
    </div>
  );
};

export default OrdersHistory;
