"use client";

import React, { useState } from "react";
import { FaPaintBrush, FaBriefcase, FaHeart, FaFileAlt, FaBullhorn, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

// Data for services
const services = [
  {
    title: "Logo Design",
    icon: FaPaintBrush,
    description: "Unique, impactful logo design for your brand.",
    fullDescription: "Custom logos tailored to represent your brand's identity.",
  },
  {
    title: "Business Stationery",
    icon: FaBriefcase,
    description: "Professional business stationery designs.",
    fullDescription: "Business cards, letterheads, and more, designed professionally.",
  },
  {
    title: "Wedding Invites",
    icon: FaHeart,
    description: "Elegant and dreamy wedding invitations.",
    fullDescription: "Beautifully crafted personalized wedding designs.",
  },
  {
    title: "Event Itineraries",
    icon: FaFileAlt,
    description: "Professional event itinerary designs.",
    fullDescription: "Comprehensive event planning and designs for weddings and corporate events.",
  },
  {
    title: "Social Media Designing",
    icon: FaBullhorn,
    description: "Captivating social media graphics.",
    fullDescription: "Graphics designed to boost engagement on your social media platforms.",
  },
  {
    title: "Content Creation",
    icon: FaCamera,
    description: "Compelling content creation services.",
    fullDescription: "Photography, videography, and written content for your brand.",
  },
];

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="pt-[120px] grid-backdrop flex flex-col lg:flex-row min-h-screen p-8 gap-8">
      {/* Left section with heading */}
      <div className="lg:w-1/3 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4 text-[#000080]">
          Learn More About Our <span className="text-[#ff007f]">Services</span>
        </h1>
        <p className="text-lg text-gray-700">
          Explore the wide range of services we offer to elevate your brand and events.
        </p>
      </div>

      {/* Right section with service grid */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-between p-6 border rounded-lg shadow-md transition-all duration-300 cursor-pointer ${
              selectedService === index ? 'bg-[#00a669] text-white' : 'bg-white'
            }`}
            onClick={() => setSelectedService(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`mb-4 ${selectedService === index ? 'text-white' : 'text-[#00a669]'}`}>
              <service.icon className="text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-center">{service.description}</p>
            {selectedService === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <p className="text-sm">{service.fullDescription}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;