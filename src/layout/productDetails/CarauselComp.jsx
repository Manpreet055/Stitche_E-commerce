import React from "react";
import { Carousel, Spinner } from "flowbite-react";

const CarauselComp = ({ images = [], loadingState = () => {} }) => {
  return (
    <div className="w-full max-w-5xl flex justify-center h-auto mb-10">
      {/* Images Slider*/}
      {loadingState ? (
        <div role="status" className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="lg:max-w-6xl relative overflow-hidden h-56 sm:h-64 xl:h-80 2xl:h-96">
          {" "}
          <Carousel slide pauseOnHover>
            {images.map((img, index) => (
              <div key={index} className="relative flex justify-center h-full ">
                <img src={img} className=" h-full" />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default CarauselComp;
