import React from 'react'
import { motion } from 'framer-motion'

const TeamSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-center text-5xl font-bold heading pt-40">Meet Our Team & Our Story</h2>
      <p className="text-center text-xl sub-heading mt-4">
        Get to know the person behind the brand and learn about the roots of Grid Design.
      </p>

      <div className="py-16 px-4 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/assests/person.jpg"
            alt="Person Behind the Company"
            className="rounded-full shadow-lg w-96 h-96 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold heading mb-4">Purva Singh</h2>
          <p className="text-lg sub-heading">
          Meet Purva, the visionary founder of Team Grid Design. A BBA graduate with certifications in graphic design and 2D animation, 
          Purva has spent the last six years transforming brands and weddings with her creative expertise. From global exhibitions to 
          personalized wedding designs, her work spans a diverse clientele across the world. Driven by passion and dedication, 
          Purva is committed to elevating her company, blending artistry with leadership. Beyond her professional achievements, 
          she enjoys music, dance, writing, and culinary arts, all while drawing strength from her family and friends. 
          Welcome to Team Grid Design, where Purva makes dreams a reality.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default TeamSection