import React from 'react'
import { motion } from 'framer-motion'

const RootsSection = () => {
  return (
    <section className="py-16 px-4 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold heading mb-4">Our Roots</h2>
        <p className="text-lg sub-heading">
          Grid Design was founded with the vision of transforming how brands interact with their audiences. Starting as a small creative studio, we have grown into a full-service design firm, providing innovative solutions for branding, web design, and digital marketing. Our commitment to excellence and passion for design has earned us a reputation as one of the top design agencies globally.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/assests/Logo.png"
          alt="Company Roots"
          className="max-w-[70%] lg:max-w-[50%] rounded-full" 
        />
      </motion.div>

    </section>
  )
}

export default RootsSection