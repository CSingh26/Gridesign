import React from "react";
import MapContainer from "./MapComponent";
import ContactForm from "./FormComponent";

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row md:space-x-8 p-4 lg:p-16">
      {/* Map will be hidden on small screens */}
      <div className="hidden md:block w-full md:w-1/2 h-[400px]">
        <MapContainer />
      </div>

      {/* Contact form will always be displayed */}
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;