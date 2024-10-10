"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaintBrush, FaBriefcase, FaHeart, FaFileAlt, FaBullhorn, FaCamera } from "react-icons/fa";
import { IconType } from "react-icons";

// Services data
const services = [
  {
    title: "Logo Design",
    icon: "FaPaintBrush",
    shortDescription: "Make your mark with a unique, impactful logo that speaks volumes about your brand.",
    description: "At Team Grid Design LLP, logo design is at the heart of what we do. We believe a logo is more than just a symbol; it’s the face of your brand. Our team specializes in creating unique, impactful logos that capture the essence of your business and leave a lasting impression. Whether you're a startup or an established brand, we craft logos that not only stand out but also tell your story with creativity and precision. Let us help you make your mark with a logo that speaks volumes."
  },
  {
    title: "Business Stationery",
    icon: "FaBriefcase",
    shortDescription: "Elevate your communication with sophisticated, memorable stationery.",
    description: "At Team Grid Design LLP, we excel in creating premium business stationery that reflects your brand’s identity with professionalism and style. From letterheads and business cards to envelopes and notepads, our designs are crafted to leave a lasting impression. We combine creativity with functionality, ensuring that every piece of stationery not only looks exceptional but also enhances your brand’s communication. Let us help you make your mark with sophisticated and memorable business stationery."
  },
  {
    title: "Wedding Invites",
    icon: "FaHeart",
    shortDescription: "Beautifully crafted wedding invitations to make your special day unforgettable.",
    description: "At Team Grid Design, we specialize in making your special day even more memorable with our beautifully crafted, elegant, and aesthetically dreamy invitations for weddings and related functions. Our passion is to create designs that capture the essence of your unique celebration, ensuring that every detail reflects the magic of your love story. We believe in delivering only the best to make your big day truly unforgettable."
  },
  {
    title: "Event Itineraries",
    icon: "FaFileAlt",
    shortDescription: "Detailed event itineraries for a seamless experience.",
    description: "At Team Grid Design LLP, wedding design is a labor of love. As a creative agency, we thrive on blending patterns, colors, and innovative designs to create unforgettable experiences. From elegant invitations to stunning decor concepts, every detail is thoughtfully crafted to reflect the unique personality of each couple. We are passionate about turning wedding dreams into reality, making every celebration as memorable and beautiful as the love it represents."
  },
  {
    title: "Social Media Designing",
    icon: "FaBullhorn",
    shortDescription: "Engage your audience with captivating social media designs.",
    description: "At Team Grid Design, we transform your online presence with visually captivating and strategic social media designs. Our creative team is dedicated to crafting designs that not only reflect your brand’s unique identity but also engage your audience across various platforms. From eye-catching posts, stories, and banners to cohesive branding elements, we provide tailored solutions that drive results and elevate your digital footprint. Trust us to bring your vision to life with aesthetics that resonate and designs that deliver."
  },
  {
    title: "Content Creation",
    icon: "FaCamera",
    shortDescription: "Compelling content tailored to your brand’s voice and goals.",
    description: "At Team Grid Design, we understand the power of words in shaping a brand's identity. Whether you're looking to enhance your brand presence, craft compelling website copy, or engage your audience with clear, impactful content, we’ve got you covered. Our team of expert writers specializes in delivering content that not only resonates with your target audience but also drives results. From creative storytelling to SEO-optimized copy, we offer a full range of writing services tailored to your brand's unique voice and goals."
  },
];

// Icon map to link icon strings to components
const iconMap: { [key: string]: IconType } = {
  FaPaintBrush: FaPaintBrush,
  FaBriefcase: FaBriefcase,
  FaHeart: FaHeart,
  FaFileAlt: FaFileAlt,
  FaBullhorn: FaBullhorn,
  FaCamera: FaCamera,
};

// Overlay variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5, transition: { duration: 0.3 } },
};

const ServicePage: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    service: "",
    company: "",
  });

  const handleCardClick = (index: number) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email && formData.name && formData.service) {
      alert("Form submitted successfully!");
      setFormData({ email: "", name: "", service: "", company: "" }); // Reset the form
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="relative pt-[220px] p-8 min-h-screen flex flex-col items-center bg-gray-100 grid-backdrop">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold heading mb-4 text-gray-500">
          Our Services
        </h1>
        <p className="text-lg text-gray-700 sub-heading">
          Explore the wide range of services we offer to elevate your brand and events.
        </p>
      </div>

      {/* Overlay for background darkening */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black z-10"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon];

          return (
            <motion.div
              key={index}
              className="flex flex-col items-start text-left p-6 bg-white rounded-lg shadow-md cursor-pointer transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCardClick(index)}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#00a669] text-[#000080] rounded-sm shadow-md">
                {IconComponent && <IconComponent className="text-3xl" />}
              </div>
              <h3 className="text-2xl font-semibold heading mb-2">
                {service.title}
              </h3>
              <p className="text-base text-gray-600 sub-heading">
                {service.shortDescription}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Card as a Modal */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-20 flex items-center justify-center p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-[#00a669] text-[#000080] rounded-sm shadow-md">
                  {iconMap[services[expandedIndex].icon] && (
                    React.createElement(iconMap[services[expandedIndex].icon], { className: "text-3xl" })
                  )}
                </div>
                <button
                  className="text-xl font-bold text-gray-600 hover:text-gray-800"
                  onClick={handleClose}
                >
                  &times;
                </button>
              </div>
              <h3 className="text-3xl font-semibold heading mb-4">
                {services[expandedIndex].title}
              </h3>
              <p className="text-lg sub-heading">
                {services[expandedIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Get Quote Form */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mt-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Get a Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="name">
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
            <label className="block text-gray-600 mb-2" htmlFor="email">
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
            <label className="block text-gray-600 mb-2" htmlFor="service">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="company">
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
          <button
            type="submit"
            className="w-full bg-[#00a669] text-white py-2 px-4 rounded-lg hover:bg-[#008b54] transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServicePage;