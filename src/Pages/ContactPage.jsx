import React from "react";
import ContactForm from "../Components/Contact/ContactForm";
import ContactPageContent from "./ContactPageContent";
import Map from "../Components/Contact/Map";
import FaqSection from "../Components/Contact/FaqSection";
import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <div className=" flex flex-col gap-20">
      <div className="flex items-center flex-wrap justify-evenly w-full ">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-96 lg:order-2 justify-self-center"
          src="/src/assets/contact.svg"
          alt=""
        />
        <ContactPageContent></ContactPageContent>
      </div>
      <div className="flex items-center flex-wrap justify-evenly w-full">
        <motion.img
        initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-96 justify-self-center"
          src="/src/assets/questions.svg"
          alt=""
        />
        <ContactForm></ContactForm>
      </div>
      <div className="px-4 lg:px-12 ">
        <Map></Map>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default ContactPage;
