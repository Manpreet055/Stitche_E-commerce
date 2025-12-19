import React from "react";
import ContactForm from "../layout/contact/ContactForm";
import Map from "../layout/contact/Map";
import FaqSection from "../layout/contact/FaqSection";
import { motion } from "framer-motion";
import ContactDetails from "../layout/contact/ContactDetails";
const ContactPage = () => {
  return (
    <div className="flex flex-wrap  text-theme my-20  w-full h-full p-6">
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactPage;
