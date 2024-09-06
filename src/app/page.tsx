"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      staggerChildren: 0.5,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1, 
      ease: "easeOut" 
    } 
  },
}

const Home = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen">

      <motion.div
        className="relative z-10 flex flex-col items-start space-y-6 p-6 lg:p-24 bg-white bg-opacity-90 lg:bg-transparent lg:w-1/2 flex-shrink"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-lg lg:text-xl text-gray-500 leading-relaxed"
          variants={childVariants}
        >
          Team Grid Design LLP is where creativity meets craftsmanship in the world of branding, design, and more.
        </motion.p>

        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight"
          variants={childVariants}
        >
          Building the Next Generation of Bold Brands
        </motion.h1>
        
        <motion.div variants={childVariants}>
          <Link href="/" className="mt-4 px-8 py-3 bg-[#00a669] text-white rounded-full hover:bg-green-700 transition-all">
              Read More
          </Link>
        </motion.div>
      </motion.div>

      <div className="relative w-full lg:w-1/2 lg:min-h-screen h-[50vh]">
        <Image 
          src='/assests/website-branding.png'
          alt="Branding Image"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="z-0"
        />
      </div>
      
    </div>
  )
}

export default Home