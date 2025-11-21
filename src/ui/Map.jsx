import React from "react";

const Map = () => {
  return (
    <div className="flex items-center flex-wrap justify-evenly w-full">
      <div className="w-full max-w-4xl mt-4">
        <iframe
          className="w-full  rounded-3xl shadow-lg "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.1378356558116!2d55.174388021555615!3d25.03141633728416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bd51887c5e3%3A0xeafdca7aad87cb12!2sSIMPLE%20MEDIA%20SOLUTIONS%20FZ%20LLC!5e0!3m2!1sen!2sae!4v1753822748764!5m2!1sen!2sae"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex p-6 flex-col gap-2">
        <div
          className="text-xl font-medium"
        >
          Our Location{" "}
        </div>
        <h3
          className="text-3xl font-semibold"
        >
          Connecting Near and Far
        </h3>
        <h1
          className="text-3xl font-medium my-4"
        >
          Headquarters
        </h1>
        <div
          className="flex flex-col"
        >
          <address className="text-lg leading-relaxed">
            SIMPLE MEDIA SOLUTIONS FZ LLC
            <br />
            Sheikh Zayed Road, Al-Quoz
            <br />
            Dubai Production City - United Arab Emirates
          </address>
        </div>
      </div>
    </div>
  );
};

export default Map;
