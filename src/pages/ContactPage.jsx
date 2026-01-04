import React, { useState } from "react";
import MessageForm from "../layout/contact/MessageForm";
import Map from "../layout/contact/Map";
import { toast } from "react-toastify";
const ContactPage = () => {
  return (
    <section className="flex flex-wrap  text-theme my-20  w-full h-full p-6">
      {toast.loading(
        <div className="flex top-2 flex-col items-center justify-center gap-1 text-center w-full">
          <span className="text-lg font-bold">Booting backend...</span>
          <p className="text-sm opacity-80">
            Stitching things together... hang tight!
          </p>
        </div>,
        {
          toastId: "server",
          position: "top-center", // Built-in center position
          className: "custom-center-toast", // We will style this in CSS
        },
      )}
      <MessageForm />
      <Map />
    </section>
  );
};

export default ContactPage;
