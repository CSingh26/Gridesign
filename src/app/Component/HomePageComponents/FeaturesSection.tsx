"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const hoverCardVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

interface Feature {
  title: string
  image: string
  description: string
}

interface FeaturesSectionProps {
  featuresSectionRef: React.RefObject<HTMLDivElement>
  features: Feature[]
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ featuresSectionRef, features }) => {
  return (
    <div ref={featuresSectionRef} id="features-section" className="py-16 px-4 lg:px-24 mt-10">
      <h2 className="text-center text-5xl font-bold heading">Explore Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden border border-gray-200 rounded-lg shadow-lg cursor-pointer"
            initial="initial"
            whileHover="hover"
            variants={hoverCardVariants}
          >
            <Image src={feature.image} alt={feature.title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold heading">{feature.title}</h3>
              <p className="mt-2 sub-heading">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection