import React from "react";
import { Button } from "flowbite-react";
const CustomerReview = () => {
  return (
    <div className="mt-10 flex-col flex">
      <h1 className="md:text-xl font-semibold text-center mb-4">
        Customer Reviews{" "}
      </h1>
      <div className="w-full flex justify-center items-center gap-4 flex-col">
        <div className="">No reviews yet, be the first to write a review !</div>
        <Button className="w-fit">Write Review</Button>
      </div>
    </div>
  );
};

export default CustomerReview;
