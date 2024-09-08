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
    <div className="relative flex flex-col items-center lg:flex-row justify-between min-h-screen">

      <div className="relative w-full lg:w-1/2 lg:h-screen h-[50vh] lg:order-1">
        <Image 
          src='/assests/website-branding.png'
          alt="Branding Image"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="z-0"
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 p-6 lg:p-24 w-full lg:w-1/2"
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
          <Link href="/" className="relative inline-block px-6 py-2 font-medium border border-[#00a669] group transition-all duration-300 ease-in-out
            sm:bg-[#00a669] sm:text-white sm:hover:bg-green-700 sm:hover:border-green-700
            lg:px-8 lg:py-3 lg:border lg:border-[#00a669] lg:group lg:hover:bg-green-700 lg:hover:border-green-700
          ">
            
            <span className="absolute inset-0 hidden lg:block bg-[#00a669] transition-transform transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300 ease-in-out"></span>
            <span className="relative z-10 text-[#000080] sm:text-white lg:text-[#000080] lg:group-hover:text-white transition-colors duration-300 ease-in-out">
              Read More
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home