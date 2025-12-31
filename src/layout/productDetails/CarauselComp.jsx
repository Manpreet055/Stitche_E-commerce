import React from "react";
import { Carousel, Spinner } from "flowbite-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CarauselComp = ({ images = [], loadingState = () => {} }) => {
  return (
    <div className="w-full max-w-5xl flex justify-center h-auto sm:mb-10">
      {/* Images Slider*/}
      {loadingState ? (
        <div role="status" className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="lg:max-w-3xl w-full relative overflow-hidden h-56 sm:h-100 2xl:h-96">
          {" "}
          <Carousel
            leftControl={
              <div className="theme-alt p-1 opacity-40 rounded-full">
                <ArrowLeft />
              </div>
            }
            rightControl={
              <div className="theme-alt p-1 opacity-40 rounded-full">
                <ArrowRight />
              </div>
            }
            slide
            pauseOnHover
          >
            {images.map((img, index) => (
              <div key={index} className="relative flex justify-center h-full ">
                <img
                  src={img}
                  loading="lazy"
                  className=" h-full w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default CarauselComp;
