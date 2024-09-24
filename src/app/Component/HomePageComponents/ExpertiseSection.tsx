"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

// Motion variants for container and bars
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
      staggerChildren: 0.3, // Delays each bar animation
    },
  },
}

// Bar animation with slower duration
const barVariants = {
  hidden: { 
    width: '0%' 
  },
  visible: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      duration: 2.5, // Slow bar animation
      ease: 'easeInOut'
    }
  })
}

const ExpertiseSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()

  const expertise = [
    { skill: 'Brand Strategy', progress: 85 },
    { skill: 'Logo Design', progress: 90 },
    { skill: 'Social Media', progress: 80 },
    { skill: 'Content Creation', progress: 75 }
  ]

  // Set animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start('visible')
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [controls, hasAnimated])

  return (
    <section ref={sectionRef} className="py-16 px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        {/* Left Side: Heading and Description */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">Expertise</h2>
          <p className="text-lg text-gray-600 text-left">
            We specialize in a range of services aimed at elevating your brand to the next level. Our expertise ensures the best outcomes tailored to your unique needs.
          </p>
        </div>

        {/* Right Side: Bars */}
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {expertise.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item.skill}</h3>
                  <span className="text-lg font-semibold text-gray-800">{item.progress}%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-lg">
                  <motion.div
                    className="h-full bg-[#00a669] rounded-lg"
                    custom={item.progress}
                    initial="hidden"
                    animate={controls}
                    variants={barVariants}
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ExpertiseSection