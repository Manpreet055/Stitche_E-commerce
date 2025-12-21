import React, { useState } from "react";
import BackButton from "../ui/BackButton";
import RenderCart from "../layout/cart/RenderCart";
import OrderSummary from "../layout/cart/OrderSummary";
import { useUser } from "../context/UserDataProvider";
const Cart = () => {
  const { cart } = useUser();
  return (
    <div className="my-20 sm:p-4 w-full theme text-theme">
      <div className="flex flex-col my-6 gap-y-3 items-start">
        <BackButton text="Back" />
        <h2 className="text-2xl lg:text-3xl px-3 font-semibold">Your Cart</h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-evenly gap-4">
        <RenderCart cart={cart} fullheight />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
