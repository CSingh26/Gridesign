"use client"

import Image from 'next/image'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPaintBrush, FaBriefcase, FaFileAlt, FaCamera, FaBullhorn, FaHeart } from 'react-icons/fa'
import Link from 'next/link'

// Motion variants for the container
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

// Motion variants for child elements
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

// Updated motion variants for card hover effect
const hoverCardVariants = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

const Home = () => {
  // Reference to the card section
  const featuresSectionRef = useRef<HTMLDivElement | null>(null)

  // Function to scroll down to the card section
  const scrollToSection = () => {
    if (featuresSectionRef.current) {
      featuresSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      {/* Homepage Section */}
      <div className="relative flex flex-col items-center lg:flex-row justify-between min-h-screen">
        {/* Image */}
        <div className="relative w-full lg:w-1/2 lg:h-screen h-[50vh] lg:order-1">
          <Image 
            src='/assests/website-branding.png'
            alt="Branding Image"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="z-0"
          />
        </div>

        {/* Text and Button */}
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
            <button 
              onClick={scrollToSection} 
              className="relative inline-block px-6 py-2 font-medium border border-[#00a669] group transition-all duration-300 ease-in-out
              sm:bg-[#00a669] sm:text-white sm:hover:bg-green-700 sm:hover:border-green-700
              lg:px-8 lg:py-3 lg:border lg:border-[#00a669] lg:group lg:hover:bg-green-700 lg:hover:border-green-700
            ">
              <span className="absolute inset-0 hidden lg:block bg-[#00a669] transition-transform transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300 ease-in-out"></span>
              <span className="relative z-10 text-[#000080] sm:text-white lg:text-[#000080] lg:group-hover:text-white transition-colors duration-300 ease-in-out">
                Read More
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Card Section */}
      <div ref={featuresSectionRef} id="features-section" className="py-16 px-4 lg:px-24 mt-10">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Explore Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            { title: 'Vision', image: '/assests/vision.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', details: 'More detailed view of the Vision feature.' },
            { title: 'Story', image: '/assests/story.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', details: 'More detailed view of the Story feature.' },
            { title: 'Achievements', image: '/assests/achievements.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', details: 'More detailed view of the Achievements feature.' },
          ].map((card, index) => (
            <motion.div 
              key={index}
              className="relative group overflow-hidden border border-gray-200 rounded-lg shadow-lg cursor-pointer"
              initial="hidden"
              whileHover="visible"
              variants={hoverCardVariants}
            >
              {/* Card Image */}
              <Image 
                src={card.image}
                alt={card.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              
              {/* Card Content */}
              <div className="p-6 opacity-100">
                <h3 className="text-2xl font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
              
              {/* Detailed View (Shows on Hover) */}
              <div className="absolute inset-0 bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-gray-800 text-center mb-4">{card.details}</p>
                <button className="px-4 py-2 bg-[#00a669] text-white rounded-full" onClick={() => alert(`${card.title} expanded`)}>
                  Close
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />
    </div>
  )
}

// Services Section Component
const services = [
  { title: 'Logo Design', icon: FaPaintBrush, link: '/services/logo-design' },
  { title: 'Business Stationary', icon: FaBriefcase, link: '/services/business-stationary' },
  { title: 'Wedding Invites', icon: FaHeart, link: '/services/wedding-invites' },
  { title: 'Event Itineraries', icon: FaFileAlt, link: '/services/event-itineraries' },
  { title: 'Social Media Designing', icon: FaBullhorn, link: '/services/social-media-designing' },
  { title: 'Content Creation', icon: FaCamera, link: '/services/content-creation' },
]

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 lg:px-24">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Services Provided</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <div className="text-center p-6 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#000080] text-white rounded-lg shadow-md">
                <service.icon className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home