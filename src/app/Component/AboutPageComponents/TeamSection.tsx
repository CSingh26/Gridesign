import React from 'react'
import { motion } from 'framer-motion'

interface TeamSectionProps {
  title: string;
  subtitle: string;
  personName: string;
  description: string;
  image: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, subtitle, personName, description, image }) => {
  return (
    <section className="py-16">
      <h2 className="text-center text-5xl font-bold heading pt-40">{title}</h2>
      <p className="text-center text-xl sub-heading mt-4">
        {subtitle}
      </p>

      <div className="py-16 px-4 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={image}
            alt={personName}
            className="rounded-full shadow-lg w-96 h-96 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold heading mb-4">{personName}</h2>
          <p className="text-lg sub-heading">
            {description}
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default TeamSection