import React, { useContext } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import CartButton from "../layout/cart/CartButton";
import RatingComp from "../layout/productDetails/RatingComp";
import BuyButton from "./BuyButton";

const ProductCard = ({ product }) => {
  const { _id, price, title, media, description, discount, rating } =
    product || {};
  return (
    <NavLink to={`/product/${_id}`}>
      <motion.div className="min-w-40 max-w-47 sm:max-w-full md:min-w-62.5 md:w-80 overflow-hidden dark:bg-black dark:text-white rounded-lg  shadow-md duration-300  hover:shadow-lg">
        <img
          className={`h-30 md:h-54 bg-center bg-cover md:min-h-54 w-full`}
          src={media.thumbnail}
          alt="Product Image"
        />
        <div className="p-2 sm:p-4 primary-bg">
          <h2 className="mb-2 text-sm md:text-xl truncate font-medium ">
            {title}
          </h2>
          <p className="mb-2 sm:text-base text-sm  sm:max-w-2xs truncate">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <p className="mr-2 sm:text-base text-sm font-semibold ">${price}</p>
            <p className=" sm:text-base text-sm font-medium  ">
              {discount?.value && discount?.value > 0
                ? discount?.value + "% off"
                : discount?.discount && discount?.discount > 0
                  ? discount?.discount + "% off"
                  : ""}
            </p>
          </div>
          <RatingComp rating={rating} />
          <div className="md:flex hidden  h-fit w-full mt-2 items-center justify-between md:gap-3">
            <BuyButton product={_id} theme="theme-alt text-theme-alt" />
            <CartButton product={_id} />{" "}
          </div>
        </div>
      </motion.div>
    </NavLink>
  );
};

export default ProductCard;
