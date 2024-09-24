"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaPaintBrush, FaBriefcase, FaFileAlt, FaCamera, FaBullhorn, FaHeart } from 'react-icons/fa'
import Link from 'next/link'

import ExpertiseSection from './Component/ExpertiseSection'
import Testimonials from './Component/Testimonial'
import ContactSection from './Component/HomePageContactSection'


// Motion variants for the container
const containerVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      staggerChildren: 0.9,
    },
  },
}

// Motion variants for child elements
const childVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.3, 
      ease: "easeOut" 
    } 
  },
}

const hoverCardVariants = {
  initial: { 
    scale: 1 
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

// Motion variants for child elements (icon and text)
const childHoverVariants = {
  initial: { 
    opacity: 1, 
    y: 0 
  },
  hover: {
    y: -5, // Slight lift on hover
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
}

const Home = () => {
  // Reference to the sections for animations
  const featuresSectionRef = useRef<HTMLDivElement | null>(null)
  const servicesSectionRef = useRef<HTMLDivElement | null>(null)
  const heroSectionRef = useRef<HTMLDivElement | null>(null)

  // State to track whether the animations have already triggered
  const [hasAnimatedServices, setHasAnimatedServices] = useState(false)
  const [hasAnimatedHero, setHasAnimatedHero] = useState(false)

  useEffect(() => {
    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedServices) {
          setHasAnimatedServices(true)
          servicesObserver.disconnect()
        }
      })
    })

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedHero) {
          setHasAnimatedHero(true)
          heroObserver.disconnect()
        }
      })
    })

    if (servicesSectionRef.current) {
      servicesObserver.observe(servicesSectionRef.current)
    }

    if (heroSectionRef.current) {
      heroObserver.observe(heroSectionRef.current)
    }

    return () => {
      servicesObserver.disconnect()
      heroObserver.disconnect()
    }
  }, [hasAnimatedServices, hasAnimatedHero])

  return (
    <div>
      {/* Homepage Section */}
      <div ref={heroSectionRef} className="relative flex flex-col items-center lg:flex-row justify-between min-h-screen">
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
          animate={hasAnimatedHero ? "visible" : "hidden"}
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
              onClick={() => featuresSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
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
              initial="initial"
              whileHover="hover"
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesSectionRef}>
        <ServicesSection hasAnimated={hasAnimatedServices} />
      </div>
      <div>
        <ExpertiseSection />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  )
}

// Services Section Component
const services = [
  {
    title: 'Logo Design',
    icon: FaPaintBrush,
    link: '/services/logo-design',
    description: 'Get a custom logo design tailored to your brand. Includes high-quality vector files, multiple revisions, and full ownership of your new logo.'
  },
  {
    title: 'Business Stationary',
    icon: FaBriefcase,
    link: '/services/business-stationary',
    description: 'Complete business stationary packages including letterheads, business cards, and envelopes. Perfect for making a professional impression.'
  },
  {
    title: 'Wedding Invites',
    icon: FaHeart,
    link: '/services/wedding-invites',
    description: 'Beautiful, personalized wedding invitations with custom designs to capture the essence of your special day.'
  },
  {
    title: 'Event Itineraries',
    icon: FaFileAlt,
    link: '/services/event-itineraries',
    description: 'Professional event itineraries designed to keep your guests informed and organized. Great for wedding and corporate events.'
  },
  {
    title: 'Social Media Designing',
    icon: FaBullhorn,
    link: '/services/social-media-designing',
    description: 'Custom social media graphics to boost your online presence and make a statement across all platforms.'
  },
  {
    title: 'Content Creation',
    icon: FaCamera,
    link: '/services/content-creation',
    description: 'High-quality content creation services including photography, videography, and written content to elevate your brand’s visibility.'
  },
]

const ServicesSection = ({ hasAnimated }: { hasAnimated: boolean }) => {
  return (
    <section className="py-16 px-4 lg:px-24"> 
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
              variants={childHoverVariants}
            >
              <service.icon className="text-3xl" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold text-gray-800 mb-2"
              variants={childHoverVariants}
            >
              {service.title}
            </motion.h3>
            <motion.p 
              className="text-base text-gray-600"
              variants={childHoverVariants}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Home