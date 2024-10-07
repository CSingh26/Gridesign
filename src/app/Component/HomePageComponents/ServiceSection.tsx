"use client"

import { motion } from "framer-motion"
import {
  FaPaintBrush,
  FaBriefcase,
  FaHeart,
  FaFileAlt,
  FaBullhorn,
  FaCamera,
} from "react-icons/fa"

interface Service {
  title: string
  icon: string
  description: string
}

interface ServicesSectionProps {
  services: Service[] // Accept services as a prop
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      staggerChildren: 0.3,
    },
  },
}

const hoverCardVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  // Map icons to their respective components
  const iconMap: { [key: string]: React.ElementType } = {
    FaPaintBrush: FaPaintBrush,
    FaBriefcase: FaBriefcase,
    FaHeart: FaHeart,
    FaFileAlt: FaFileAlt,
    FaBullhorn: FaBullhorn,
    FaCamera: FaCamera,
  }

  return (
    <section className="py-16 px-4 lg:px-24" id="services-section">
      <h2 className="text-center text-5xl font-bold heading mb-12">
        Services Provided
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon]

          return (
            <motion.div
              key={index}
              className="flex flex-col items-start text-left p-6"
              initial="initial"
              whileHover="hover"
              variants={hoverCardVariants}
            >
              <motion.div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#00a669] text-[#000080] rounded-sm shadow-md">
                {IconComponent && <IconComponent className="text-3xl" />}
              </motion.div>
              <motion.h3 className="text-2xl font-semibold heading mb-2">
                {service.title}
              </motion.h3>
              <motion.p className="text-base font-bold sub-heading">
                {service.description}
              </motion.p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default ServicesSection