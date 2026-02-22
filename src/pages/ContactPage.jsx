import React from "react";
import MessageForm from "../layout/contact/MessageForm";
import Map from "../layout/contact/Map";
const ContactPage = () => {
  return (
    <section className="flex flex-wrap  text-theme my-20  w-full h-full p-6">
      <MessageForm />
      <Map />
    </section>
  );
};

export default ContactPage;
