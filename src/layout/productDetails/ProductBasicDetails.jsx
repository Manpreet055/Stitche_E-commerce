import React from "react";
import capitalizeFirstLetter from "../../utils/capitalizeLetter";
import Counter from "../../ui/Counter";
import { Button } from "flowbite-react";
import RatingComp from "./RatingComp";
import CartButton from "../cart/CartButton";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useUser } from "../../context/UserDataProvider";
import { addProductToCart } from "../../services/handleCart";
import { useNavigate } from "react-router-dom";
const ProductBasicDetails = ({ product }) => {
  const {
    _id,
    title,
    brand,
    description,
    price,
    category,
    subCategory,
    rating,
  } = product;

  const stock = product?.stock ?? product?.quantity ?? 0;

  const naviagte = useNavigate();
  const api = useAxiosPrivate();
  const { refetchCart, setError } = useUser();
  const handleAddToCart = async () => {
    try {
      await addProductToCart(api, { product, qty: 1 });
      await refetchCart();
    } catch (error) {
      setError(error, message);
    }
  };

  return (
    <div className="w-fit flex grow flex-col theme text-theme">
      <span className="font-semibold">{brand}</span>
      <span className="font-semibold md:text-2xl">{title}</span>
      <span className="font-medium mt-4 md:text-2xl">${price}</span>
      <RatingComp rating={rating} />
      <p className="mt-2 sm:mt-4 max-w-md">{description}</p>
      <p className=" mt-2">
        <span className="font-medium lg:text-lg">Category</span> :{" "}
        {capitalizeFirstLetter(category)}/{subCategory}
      </p>
      <p className="mt-2 font-medium lg:text-lg">
        Stock :{" "}
        {stock === 0
          ? "Currently out of stock"
          : stock <= 10
            ? `Only ${stock}  left`
            : `${stock} In Stock `}
      </p>
      <div className="flex items-center  mt-3  sm:mt-6 gap-3">
        <Counter productId={_id} />
        <CartButton product={_id} text="Add to Cart" />
      </div>
      <div className="flex justify-start w-full">
        <Button
          onClick={async (event) => {
            event.stopPropagation();
            await handleAddToCart();
            naviagte("/orders");
          }}
          className="w-full sm:max-w-xs text-nowrap mt-3 sm:mt-6 hover:scale-[1.01] ease-in-out transition-all"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductBasicDetails;
