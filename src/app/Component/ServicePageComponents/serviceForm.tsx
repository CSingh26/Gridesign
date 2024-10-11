"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

interface GetQuoteFormProps {
  services: string[];
}

const GetQuoteForm: React.FC<GetQuoteFormProps> = ({ services }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    service: "",
    company: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      company: formData.company || "N/A", // Default value if company is not provided
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setIsError(false);
          // Reset form
          setFormData({
            name: "",
            email: "",
            service: "",
            company: "",
          });
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setIsError(true);
          setIsSent(false);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-8 shadow-none"
      style={{ background: "transparent" }}
    >
      <div className="mb-4">
        <label className="block heading mb-2" htmlFor="name">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block heading mb-2" htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block heading mb-2" htmlFor="service">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="" className="sub-heading">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block heading mb-2" htmlFor="company">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      {isSent && <p className="text-green-500 mb-4">Message sent successfully!</p>}
      {isError && <p className="text-red-500 mb-4">Failed to send message.</p>}
      <button
        type="submit"
        className="heading w-full bg-[#00a669] text-white py-2 px-4 rounded-lg hover:bg-[#008b54] transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default GetQuoteForm;