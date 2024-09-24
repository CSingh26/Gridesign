"use client"

import { motion } from "framer-motion"
import { FaPaintBrush, FaBriefcase, FaFileAlt, FaCamera, FaBullhorn, FaHeart } from "react-icons/fa"

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      staggerChildren: 0.3, // Delays each bar animation
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

const ServicesSection = ({ hasAnimated }: { hasAnimated: boolean }) => {
  const services = [
    {
      title: "Logo Design",
      icon: FaPaintBrush,
      description: "Get a custom logo design tailored to your brand. Includes high-quality vector files, multiple revisions, and full ownership of your new logo.",
    },
    {
      title: "Business Stationary",
      icon: FaBriefcase,
      description: "Complete business stationary packages including letterheads, business cards, and envelopes. Perfect for making a professional impression.",
    },
    {
      title: "Wedding Invites",
      icon: FaHeart,
      description: "Beautiful, personalized wedding invitations with custom designs to capture the essence of your special day.",
    },
    {
      title: "Event Itineraries",
      icon: FaFileAlt,
      description: "Professional event itineraries designed to keep your guests informed and organized. Great for weddings and corporate events.",
    },
    {
      title: "Social Media Designing",
      icon: FaBullhorn,
      description: "Custom social media graphics to boost your online presence and make a statement across all platforms.",
    },
    {
      title: "Content Creation",
      icon: FaCamera,
      description: "High-quality content creation services including photography, videography, and written content to elevate your brand’s visibility.",
    },
  ]

  return (
    <section className="py-16 px-4 lg:px-24" id="services-section">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Services Provided</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-left p-6"
            initial="initial"
            whileHover="hover"
            variants={hoverCardVariants}
          >
            <motion.div
              className="w-16 h-16 mb-4 flex items-center justify-center bg-[#00a669] text-[#000080] rounded-sm shadow-md"
            >
              <service.icon className="text-3xl" />
            </motion.div>
            <motion.h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </motion.h3>
            <motion.p className="text-base text-gray-600">{service.description}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ServicesSection