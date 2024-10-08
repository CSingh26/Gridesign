import React from 'react'
import { motion } from 'framer-motion'

interface RootsSectionProps {
  title: string;
  description: string;
  image: string;
}

const RootsSection: React.FC<RootsSectionProps> = ({ title, description, image }) => {
  return (
    <section className="py-16 px-4 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold heading mb-4">{title}</h2>
        <p className="text-lg sub-heading">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={image}
          alt="Company Roots"
          className="max-w-[70%] lg:max-w-[50%] rounded-full" 
        />
      </motion.div>

    </section>
  );
}

export default RootsSection