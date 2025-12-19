import React from "react";

const Map = () => {
  return (
    <div className="h-100 sm:h-140 grow flex flex-col justify-center items-center ">
      <h2 className="font-bold text-2xl text-start w-full lg:text-5xl my-5">
        Find Us On Map
      </h2>
      <div className="flex w-full h-full justify-center    ">
        <iframe
          className="rounded w-full shadow-lg "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.2441585328256!2d55.13805137611208!3d24.99181823998749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73a5606fb267%3A0x8eb2e63ef6efa0d9!2sFASTTRACK%20LABOUR%20CAMP%20JEBEL%20ALI!5e0!3m2!1sen!2sae!4v1766163518025!5m2!1sen!2sae"
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
