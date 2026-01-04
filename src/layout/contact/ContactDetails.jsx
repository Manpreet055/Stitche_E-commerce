import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
const ContactDetails = () => {
  return (
    <div className="flex flex-wrap max-w-screen gap-5  md:gap-10 mt-10">
      <div className="flex gap-2 sm:p-5 p-2 grow  items-center">
        <MapPin size={22} />
        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-lg">Address</span>
          <a
            className="md:max-w-max text-nowrap text-xs md:text-base max-w-20"
            href="https://maps.app.goo.gl/NbL4871bsJdzXRDj6"
          >
            Production city, Dubai
          </a>
        </div>
      </div>
      <div className="flex gap-2 ml-3 sm:p-5 p-2 grow  items-center">
        <Phone size={22} />
        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-lg">Phone</span>
          <a
            className="md:max-w-max text-nowrap text-xs md:text-base max-w-20 "
            href="tel:+971 5618-21018"
          >
            +971 5618-21018
          </a>
        </div>
      </div>
      <div className="flex gap-2 sm:p-5 p-2 grow  items-center">
        <Mail size={22} />
        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-lg">Email</span>
          <a
            className="md:max-w-max text-xs md:text-base max-w-40 "
            href="mailto:manpreetuae4@gmail.com"
          >
            support.stitche@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
