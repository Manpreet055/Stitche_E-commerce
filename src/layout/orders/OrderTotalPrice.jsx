import React from "react";

const OrderTotalPrice = ({ order }) => {
  const deliveryFee = (order.totalAmount * 0.01).toFixed(2);
  return (
    <>
      <h2 className="text-2xl font-bold mt-6 my-4">Price Details</h2>
      <div className="w-full rounded-lg flex flex-col py-4 gap-3 border-theme">
        <div className="w-full place-items-center grid grid-cols-2">
          {" "}
          <span className="sm:text-lg font-semibold">Total Price:</span>
          <span className="sm:text-base text-sm"> ${order.totalAmount}</span>
        </div>
        <div className="w-full place-items-center grid grid-cols-2">
          {" "}
          <span className="sm:text-lg font-semibold">Discount:</span>
          <span className="sm:text-base text-sm"> ${order.discount}</span>
        </div>

        <div className="w-full place-items-center grid grid-cols-2">
          {" "}
          <span className="sm:text-lg font-semibold">Discounted price: </span>
          <span className="sm:text-base text-sm">
            $
            {order?.priceAfterDiscount
              ? order?.priceAfterDiscount
              : (order.totalAmount - order.discount).toFixed(2)}
          </span>
        </div>
        <div className="w-full place-items-center grid grid-cols-2">
          {" "}
          <span className="sm:text-lg font-semibold">Delivery Fee: </span>
          <span className="sm:text-base text-sm">
            {" "}
            ${order?.deliveryFee ?? deliveryFee}
          </span>
        </div>
        <hr className="border-theme mt-3 opacity-45" />
        <div className="w-full place-items-center grid grid-cols-2">
          {" "}
          <span className="sm:text-lg font-semibold">Sub Total: </span>
          <span className="sm:text-base text-sm">
            $
            {order?.subTotal
              ? order?.subTotal
              : (order.priceAfterDiscount + order.deliveryFee).toFixed(2)}
          </span>
        </div>
      </div>
    </>
  );
};

export default OrderTotalPrice;
