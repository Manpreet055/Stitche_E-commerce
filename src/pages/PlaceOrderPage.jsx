import React from "react";
import { useUser } from "../context/UserDataProvider";
import RenderCart from "../layout/cart/RenderCart";
import convertDate from "../utils/convertDate";
import { MapPin, CreditCard, BadgeCheck } from "lucide-react";
import capitalizeLetter from "../utils/capitalizeLetter";
import { Navigate, NavLink } from "react-router-dom";
import useOrders from "../hooks/useOrders";
import generatePriceDetails from "../utils/generatePriceDetails";
import orderDataGenerator from "../utils/orderDataGenerator";
import { Spinner } from "flowbite-react";
import useBackNavigation from "../hooks/useBackNavigation";

const PlaceOrderPage = () => {
  const { BackButton } = useBackNavigation(); //custom hook
  const { placeOrder, loadingState } = useOrders();

  const { date, randomOrderId } = orderDataGenerator();
  let { user, cart } = useUser();

  const { priceAfterDiscount, deliveryFee, sumofProductsPrice, subTotal } =
    generatePriceDetails(cart);

  if (!user) return <Navigate to="/login" replace />;
  return (
    <div className=" flex mt-20 justify-center">
      <div className="max-w-300 flex theme items-center text-theme flex-col w-full">
        <div className="w-full text-start mb-6">{BackButton()}</div>
        {/* Cart  */}
        <div className="w-full flex sm:text-xl font-semibold p-6 theme-transparent rounded-t-xl border-theme justify-between">
          Order ID: #{randomOrderId}
          <span>Date: {convertDate(date)}</span>
        </div>
        <div className="w-full ">
          <RenderCart fullheight cart={cart} />
        </div>

        {/* Order Summary   */}
        <div className="w-full flex flex-col border-theme p-4 rounded  justify-between my-6">
          <h2 className="text-xl font-medium">Order Summary</h2>{" "}
          <div className="flex sm:text-xl justify-between items-center mt-4">
            Sub Total :{" "}
            <span className="font-bold sm:text-lg">${sumofProductsPrice}</span>
          </div>
          <div className="sm:text-xl flex justify-between items-center mt-4">
            Discount (10%) :{" "}
            <span className="font-bold sm:text-lg">${priceAfterDiscount}</span>
          </div>
          <div className="sm:text-xl flex justify-between items-center mt-4">
            Delivery fee :{" "}
            <span className="font-bold sm:text-lg">${deliveryFee}</span>
          </div>
          <hr className="mt-6 text-gray-400" />
          <div className=" sm:text-xl flex justify-between items-center mt-4">
            Total : <span className="font-bold sm:text-lg">${subTotal}</span>
          </div>
        </div>

        {/* Address and payment */}
        <div className="w-full flex flex-wrap sm:flex-nowrap border-theme  justify-between ">
          <div className="w-full flex gap-4  p-6">
            <MapPin />
            <div className="flex flex-col gap-2">
              <h5 className="sm:text-lg font-bold"> Shipping Address</h5>
              <span className="font-semibold sm:text-lg mt-2">
                {capitalizeLetter(user?.profile?.fullName)}
              </span>
              <span>{user?.profile?.address?.street ?? "Not Specified"}</span>
              <span>{user?.profile?.address?.city ?? "Not Specified"}</span>
              <span>{user?.profile?.address?.country ?? "Not Specified"}</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 border-l border-gray-300 dark:border-gray-400 p-6">
            <h5 className="flex items-center gap-3 sm:text-lg font-bold">
              <CreditCard />
              Payment Method
            </h5>
            <span className="sm:text-lg font-medium">Credit Card</span>
            <span className="flex items-center gap-5">
              {" "}
              <span className="text-2xl font-extrabold p-1 rounded border-theme w-fit">
                VISA
              </span>
              **** **** 1234
            </span>
          </div>
        </div>

        <button
          onClick={placeOrder}
          className="w-full btn-primary my-4  sm:text-lg poppins  text-center text-theme-alt theme-alt"
        >
          {loadingState ? (
            <span className="flex items-center justify-center gap-3">
              <Spinner className="h-4 w-fit" color="gray" />
              Placing Order
            </span>
          ) : (
            "Place Order"
          )}{" "}
        </button>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
