import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
import RatingComp from "../layout/productDetails/RatingComp";

const ProductCard = ({ product }) => {
  const { _id, price, title, media, description, discount, rating } =
    product || {};
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/product/${_id}`)}
      className="min-w-62.5 mx-auto w-80 overflow-hidden dark:bg-black dark:text-white rounded-lg  shadow-md duration-300  hover:shadow-lg"
    >
      <img
        className={`h-54 object-cover bg-white hover-transition card-img w-full min-h-54  object-center`}
        src={media.thumbnail}
        alt="Product Image"
      />
      <div className="p-4  primary-bg">
        <h2 className="mb-2 text-xl font-medium ">{title}</h2>
        <p className="mb-2 text-base">
          {description.length >= 50
            ? description.slice(0, 50) + "..."
            : description}{" "}
        </p>
        <div className="flex items-center">
          <p className="mr-2 font-semibold ">${price}</p>
          <p className="ml-auto text-base font-medium  ">
            {discount?.value ?? discount?.discount ?? 0}% off
          </p>
        </div>
        <RatingComp rating={rating} />
        <div className="flex h-full w-full   z-99 mt-2 gap-3">
          <button className="rounded-xl p-3 bg-black text-white border border-gray-200 w-full hover:scale-[1.02] ease-in-out transition-all">
            Buy Now{" "}
          </button>
          <CartButton product={_id} />{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
