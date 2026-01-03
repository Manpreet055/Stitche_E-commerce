import React from "react";

const Map = () => {
  return (
    <div className="h-100 sm:h-140 grow flex flex-col justify-center items-center xl:mr-30 ">
      <h2 className="font-bold text-2xl text-start w-full lg:text-5xl my-5">
        Find Us On Map
      </h2>
      <div className="flex w-full h-full justify-center    ">
        <iframe
          className="rounded-2xl w-full shadow-lg "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0534075152477!2d55.176063276112906!3d25.032261538360096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d0814605249%3A0xcdb9a55f32783617!2sFASTTRACKDISPLAY%20FZ%20LLC!5e0!3m2!1sen!2sae!4v1767471544590!5m2!1sen!2sae"
          width="auto"
          height="auto"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
