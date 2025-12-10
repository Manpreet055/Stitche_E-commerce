import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, price, title, media, description, discount } = product || {};
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/product/${_id}`)}
      className="min-w-[250px] mx-auto w-80 overflow-hidden rounded-lg  shadow-md duration-300  hover:shadow-lg"
    >
      <img
        className={`h-54 object-cover bg-white hover-transition card-img w-full min-h-54  object-center`}
        src={media.thumbnail}
        alt="Product Image"
      />
      <div className="p-4  primary-bg">
        <h2 className="mb-2 text-xl font-medium dark:text-white text-no text-gray-900">
          {title}
        </h2>
        <p className="mb-2 text-base">{description}</p>
        <div className="flex items-center">
          <p className="mr-2 font-semibold text-[#3d2b1f]">${price}</p>
          <p className="ml-auto text-base font-medium  ">
            {discount?.value ?? discount?.discount ?? 0}% off
          </p>
        </div>
        <div className="flex h-full flex-col z-99 mt-2 gap-3">
          <button className="rounded-2xl p-3 theme border  text-white bg-accent hover:scale-[1.02] ease-in-out transition-all">
            Buy Now{" "}
          </button>
          <button className="rounded-2xl p-3 border">Add to Cart </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
