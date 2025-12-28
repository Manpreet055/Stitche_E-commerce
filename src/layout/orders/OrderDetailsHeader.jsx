import React, { useState } from "react";
import { List, ListItem } from "flowbite-react";
import convertDate from "../../utils/convertDate";
import capitalizeFirstLetter from "../../utils/capitalizeLetter";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
const OrderDetailsHeader = ({ order }) => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const api = useAxiosPrivate();

  const {
    _id,
    shipping: { trackingId, street, city, postalCode, country },
    createdAt,
    orderStatus,
    payment: { method, transactionId },
    user: {
      profile: { fullName },
    },
  } = order || {};

  const statusColor = {
    cancelled: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800",
    delivered: "bg-green-100 text-green-800",
    confirmed: "bg-indigo-100 text-indigo-800",
    shipped: "bg-purple-100 text-purple-800",
  };

  const cancelOrder = async () => {
    if (!confirm("Do you really want to cancel the order")) return;
    try {
      setLoadingState(true);
      const response = await api.patch(`/orders/${_id}`);
      if (response.status === 200) {
        navigate(-1);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <div className="w-full flex flex-col p-3">
      <h2 className="w-full  text-start text-4xl font-semibold">
        Order #{trackingId}
      </h2>
      <div className="w-full flex justify-between ">
        <div className="text-xl flex items-center gap-3 font-semibold">
          Order date:{" "}
          <span className="text-base">{convertDate(createdAt, "long")}</span>
        </div>
        <button
          onClick={cancelOrder}
          className={`btn-primary border-theme text-red-500 ${orderStatus === "cancelled" && "hidden"}`}
        >
          Cancel Order
        </button>
      </div>

      {/* Cards */}
      <div className="flex border-theme flex-wrap my-5 rounded-lg">
        <div className=" border-r border-gray-300 dark:border-gray-400  grow flex flex-col gap-4 px-5 py-6">
          <h2 className="text-2xl font-semibold mb-2">Order information</h2>
          <div className="grid grid-cols-2 font-medium  text-xl">
            Order Id: <span className="text-lg"> #{trackingId}</span>
          </div>
          <div className="grid grid-cols-2 font-medium  text-xl">
            Order Date:{" "}
            <span className="text-lg"> {convertDate(createdAt, "long")}</span>
          </div>
          <div className="grid grid-cols-2 py-1 font-medium  text-xl">
            Order Status:{" "}
            <span
              className={`text-lg w-fit px-2 p-1 rounded-lg ${statusColor[orderStatus]}`}
            >
              {" "}
              {capitalizeFirstLetter(orderStatus)}
            </span>
          </div>
          <div className="grid grid-cols-2 font-medium  text-xl">
            Payment method: <span className="text-lg"> {method}</span>
          </div>
          <div className="grid grid-cols-2 font-medium  text-xl">
            Transaction ID : <span className="text-lg"> {transactionId}</span>
          </div>
        </div>

        {/* Shipping Adress */}
        <div className="grow flex flex-col gap-4 p-6">
          <h2 className="text-2xl font-semibold mb-2">Shipping Address</h2>
          <div className="grid grid-cols-2 font-medium  text-xl">
            Ordered By: <span className="text-lg"> {fullName}</span>
          </div>
          <div className="grid grid-cols-2 font-medium  text-xl">
            Street: <span className="text-lg"> {street}</span>
          </div>
          <div className="grid grid-cols-2 font-medium  text-xl">
            City: <span className="text-lg"> {city}</span>
          </div>
          <div className="grid grid-cols-2 font-medium  text-xl">
            Postal Code: <span className="text-lg"> {postalCode}</span>
          </div>
          <div className="grid grid-cols-2 font-medium  text-xl">
            Country: <span className="text-lg"> {country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsHeader;
