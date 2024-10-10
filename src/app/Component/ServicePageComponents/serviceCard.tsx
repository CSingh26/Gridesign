"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  icon: IconType;
  shortDescription: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: IconComponent, shortDescription, onClick }) => {
  return (
    <motion.div
      className="flex flex-col items-start text-left p-6 bg-white rounded-lg shadow-md cursor-pointer transition-transform duration-700"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#00a669] text-[#000080] rounded-sm shadow-md">
        {IconComponent && <IconComponent className="text-3xl" />}
      </div>
      <h3 className="text-2xl font-semibold heading mb-2">
        {title}
      </h3>
      <p className="text-base text-gray-600 sub-heading">
        {shortDescription}
      </p>
    </motion.div>
  );
};

export default ServiceCard;