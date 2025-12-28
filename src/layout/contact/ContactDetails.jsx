import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
const ContactDetails = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-10">
      <div className="flex gap-2 p-5  items-center">
        <MapPin size={30} />
        <div className="flex flex-col">
          <span className="font-medium md:text-lg">Address</span>
          <a
            className="md:max-w-max  max-w-20 truncate"
            href="https://maps.app.goo.gl/NbL4871bsJdzXRDj6"
          >
            Jabel ali, Dubai
          </a>
        </div>
      </div>
      <div className="flex gap-2 p-5  items-center">
        <Phone size={30} />
        <div className="flex flex-col">
          <span className="font-medium md:text-lg">Phone</span>
          <a
            className="md:max-w-max  max-w-20 truncate"
            href="tel:+971 5618-21018"
          >
            +971 5618-21018
          </a>
        </div>
      </div>
      <div className="flex gap-2 p-5  items-center">
        <Mail size={30} />
        <div className="flex flex-col">
          <span className="font-medium md:text-lg">Email</span>
          <a
            className="md:max-w-max max-w-20 truncate"
            href="mailto:manpreetuae4@gmail.com"
          >
            support.stitch@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
