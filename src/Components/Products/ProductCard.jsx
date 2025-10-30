import React, { useContext } from "react";
import { motion } from "framer-motion";
import ApiDataContext from "../../Context/ApiDataContext";
import SelectedProductContext from "../../Context/SelectedProductContext";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { apiData } = useContext(ApiDataContext);
  const { setSelectedProduct } = useContext(SelectedProductContext);
  const navigateToPDP = useNavigate();
  const handleCardClick = () => {
    setSelectedProduct(apiData.find((item) => item.id === props.id));
    navigateToPDP(`ProductOverview/${props.id}`);
  };

  return (
    <motion.div
      onClick={handleCardClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      id={props.id}
      className="min-w-[250px]  mx-auto w-80 overflow-hidden rounded-lg  shadow-md duration-300  hover:shadow-lg"
    >
      <img
        className={`${
          props.height || "h-54"
        } object-cover bg-white hover-transition card-img w-full min-h-54  object-center`}
        src={props.image}
        alt="Product Image"
      />
      <div className="p-4  primary-bg">
        <h2 className="mb-2 text-xl font-medium dark:text-white text-no text-gray-900">
          {props.productname}
        </h2>
        {props.description && (
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            {props.description}
          </p>
        )}
        <div className="flex items-center">
          {props.price && (
            <p className="mr-2 font-semibold text-gray-900 dark:text-white">
              {props.price}
            </p>
          )}
          {props.oldprice && (
            <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
              {props.oldprice}
            </p>
          )}
          {props.discount && (
            <p className="ml-auto text-base font-medium text-gray-300">
              {props.discount}% off
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
