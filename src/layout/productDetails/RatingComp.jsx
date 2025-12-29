import React from "react";
import { Rating, RatingStar } from "flowbite-react";

const RatingComp = ({ rating }) => {
  let { average, count } = rating;
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= average) {
      ratings.push(<RatingStar className="text-sm" fill="orange" />);
    } else {
      ratings.push(<RatingStar fill="gray" />);
    }
  }

  return (
    <Rating className="mt-2 sm:mt-4">
      {...ratings}
      <p className="ml-2 text-sm font-semibold ">{average}</p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a
        href="#"
        className="hidden sm:block text-sm font-medium underline hover:no-underline"
      >
        {count} reviews
      </a>
    </Rating>
  );
};

export default RatingComp;
