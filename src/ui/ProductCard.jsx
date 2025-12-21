import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CartButton from "../layout/cart/CartButton";
import RatingComp from "../layout/productDetails/RatingComp";

const ProductCard = ({ product }) => {
  const { _id, price, title, media, description, discount, rating } =
    product || {};
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/product/${_id}`)}
      className="min-w-45 max-w-50 sm:max-w-full md:min-w-62.5 md:w-80 overflow-hidden dark:bg-black dark:text-white rounded-lg  shadow-md duration-300  hover:shadow-lg"
    >
      <img
        className={`h-30 md:h-54 bg-center bg-cover md:min-h-54 w-full`}
        src={media.thumbnail}
        alt="Product Image"
      />
      <div className="p-4  primary-bg">
        <h2 className="mb-2 md:text-xl truncate font-medium ">{title}</h2>
        <p className="mb-2  sm:max-w-2xs truncate">{description}</p>
        <div className="flex items-center">
          <p className="mr-2 font-semibold ">${price}</p>
          <p className="ml-auto text-base font-medium  ">
            {discount?.value ?? discount?.discount ?? 0}% off
          </p>
        </div>
        <RatingComp rating={rating} />
        <div className="md:flex hidden  h-fit w-full mt-2 justify-between md:gap-3">
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
