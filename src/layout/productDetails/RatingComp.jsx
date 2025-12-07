import React from "react";
import { Rating, RatingStar } from "flowbite-react";

const RatingComp = ({ rating }) => {
  let { average, count } = rating;
  const ratingStars = [];
  for (let star = 1; star <= average; star++) {
    ratingStars.push(<RatingStar />);
  }
  return (
    <Rating className="mt-4">
      {ratingStars}
      <p className="ml-2 text-sm font-semibold ">{average}</p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a href="#" className="text-sm font-medium underline hover:no-underline">
        {count} reviews
      </a>
    </Rating>
  );
};

export default RatingComp;
