import React from "react";
const Banner = ({ children: slides }) => {
  return (
    <div className="w-full overflow-hidden">
      {/* Container holding two copies of the content */}
      <div className="flex gap-5 sm:gap-10 animate-infinite-scroll my-5 w-max">
        {/* First set */}
        {slides}
        {/* Second set (duplicate) */}
        {slides}
      </div>
    </div>
  );
};

export default Banner;
