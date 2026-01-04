import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderDetailsHeader from "../layout/orders/OrderDetailsHeader";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import AsyncBoundary from "../ui/AsyncBoundary";
import RenderOrderedProducts from "../layout/orders/RenderOrderedProducts";
import OrderTotalPrice from "../layout/orders/OrderTotalPrice";
import useBackNavigation from "../hooks/useBackNavigation";

const OrderDetails = () => {
  const { BackButton } = useBackNavigation();
  const api = useAxiosPrivate();
  const { id } = useParams();

  // Initialize as null or undefined since it's a single order object, not a list
  const [order, setOrder] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  const getOrderedProducts = async () => {
    try {
      setLoadingState(true);
      const response = await api.get(`/orders/${id}`);
      setOrder(response.data?.orders);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    getOrderedProducts();
  }, [id]); // Include 'id' as a dependency in case the URL changes
  if (loadingState) {
    return <AsyncBoundary loadingState={loadingState} errorState={null} />;
  }

  return (
    <section className="my-15 sm:my-20 flex justify-center theme text-theme ">
      <div className="w-full max-w-7xl p-1 sm:p-4">
        {BackButton()}
        <OrderDetailsHeader order={order} />
        <RenderOrderedProducts products={order.products} />
        <OrderTotalPrice order={order} />
      </div>
    </section>
  );
};

export default OrderDetails;
