import React from "react";
import { Rating, RatingStar } from "flowbite-react";

const ProductRating = ({ rating }) => {
  let { average, count } = rating;
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Number(average).toFixed(0)) {
      ratings.push(<RatingStar className="text-sm" fill="orange" />);
    } else {
      ratings.push(<RatingStar fill="gray" />);
    }
  }

  return (
    <Rating className="mt-1 sm:mt-4">
      {...ratings}
      <p className="ml-2 text-sm font-semibold ">
        {Number(average).toFixed(1)}
      </p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <span className="hidden sm:block text-sm font-medium underline hover:no-underline">
        {Number(count).toFixed(0)} reviews
      </span>
    </Rating>
  );
};

export default ProductRating;
