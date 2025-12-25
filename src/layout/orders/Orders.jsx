import React from "react";
import { useUser } from "../../context/UserDataProvider";
import RenderCart from "../cart/RenderCart";
import convertDate from "../../utils/convertDate";
import { MapPin, IdCard, CreditCard, BadgeCheck } from "lucide-react";
import capitalizeLetter from "../../utils/capitalizeLetter";
import { NavLink } from "react-router-dom";
import BackButton from "../../ui/BackButton";
const Orders = ({ order = null }) => {
  let { user, cart } = useUser();
  const date = Date.now();
  const randomOrderId = Math.floor(1000000 + Math.random() * 9000000);
  if (order) {
    cart = [...cart, order];
  }

  const sumofProductsPrice = cart.reduce(
    (acc, p) => acc + p?.product?.price * p.qty,
    0,
  );
  const priceAfterDiscount = sumofProductsPrice * 0.9;
  const deliveryFee = sumofProductsPrice * 0.01;
  return (
    <div className=" flex mt-20 justify-center">
      <div className="max-w-300 flex theme items-center text-theme flex-col w-full">
        <div className="w-full text-start">
          <BackButton text="Go Back" />
        </div>
        <BadgeCheck className="my-4" size={54} />
        {/* Heading */}
        <h2 className="headers poppins">Thank You for Your Purchase!</h2>
        <p className="para my-4 max-w-xl text-center">
          Your order has been successfully placed. A confirmation email has been
          sent to <span className="sm:text-xl font-bold">{user?.email}</span>
        </p>

        {/* Cart  */}
        <div className="w-full flex sm:text-xl p-6 theme-transparent rounded-t-xl border-theme justify-between">
          Order ID: #{randomOrderId}
          <span>Order Date: {convertDate(date)}</span>
        </div>
        <div className="w-full ">
          <RenderCart cart={cart} />
        </div>

        {/* Order Summary   */}
        <div className="w-full flex flex-col border-theme p-4 rounded  justify-between my-6">
          <h2 className="text-xl font-medium">Order Summary</h2>{" "}
          <div className="flex sm:text-xl justify-between items-center mt-4">
            Sub Total :{" "}
            <span className="font-bold sm:text-lg">
              ${sumofProductsPrice.toFixed(2)}
            </span>
          </div>
          <div className="sm:text-xl flex justify-between items-center mt-4">
            Discount (10%) :{" "}
            <span className="font-bold sm:text-lg">
              ${priceAfterDiscount.toFixed(2)}
            </span>
          </div>
          <div className="sm:text-xl flex justify-between items-center mt-4">
            Delivery fee :{" "}
            <span className="font-bold sm:text-lg">
              ${deliveryFee.toFixed(2)}
            </span>
          </div>
          <hr className="mt-6 text-gray-400" />
          <div className=" sm:text-xl flex justify-between items-center mt-4">
            Total :{" "}
            <span className="font-bold sm:text-lg">
              ${(priceAfterDiscount + deliveryFee).toFixed(2)}
            </span>
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

        <NavLink
          to="/products"
          className="w-full btn-primary sm:text-lg poppins max-w-sm text-center my-6 text-theme-alt theme-alt"
        >
          Continue Shopping
        </NavLink>
      </div>
    </div>
  );
};

export default Orders;
