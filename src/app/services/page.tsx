"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaintBrush, FaBriefcase, FaHeart, FaFileAlt, FaBullhorn, FaCamera } from "react-icons/fa";
import { IconType } from "react-icons";

import ServiceCard from "../Component/ServicePageComponents/serviceCard";
import GetQuoteForm from "../Component/ServicePageComponents/serviceForm";
import servicesData from '../../../public/data/services.json'

// Icon map to link icon strings to components
const iconMap: { [key: string]: IconType } = {
  FaPaintBrush: FaPaintBrush,
  FaBriefcase: FaBriefcase,
  FaHeart: FaHeart,
  FaFileAlt: FaFileAlt,
  FaBullhorn: FaBullhorn,
  FaCamera: FaCamera,
};

const ServicePage: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <ServiceCard
              key={index}
              title={service.title}
              icon={IconComponent}
              shortDescription={service.shortDescription}
              onClick={() => handleCardClick(index)}
            />
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 w-full mb-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold heading mb-4 text-gray-500">
            Get a Quote
          </h2>
          <p className="text-lg text-gray-700 sub-heading">
            Let us know your requirements, and we’ll provide a customized quote tailored to your needs.
          </p>
        </div>
        <div className="flex justify-center">
          <GetQuoteForm services={servicesData.map(service => service.title)} />
        </div>
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
                  {iconMap[servicesData[expandedIndex].icon] && (
                    React.createElement(iconMap[servicesData[expandedIndex].icon], { className: "text-3xl" })
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
                {servicesData[expandedIndex].title}
              </h3>
              <p className="text-lg sub-heading">
                {servicesData[expandedIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicePage;