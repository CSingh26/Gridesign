"use client"

import { useEffect, useRef, useState } from 'react'
import HeroSection from './Component/HomePageComponents/HeroSection'
import FeaturesSection from './Component/HomePageComponents/FeaturesSection'
import ServicesSection from './Component/HomePageComponents/ServiceSection'
import ExpertiseSection from './Component/HomePageComponents/ExpertiseSection'
import Testimonials from './Component/HomePageComponents/Testimonial'
import ContactSection from './Component/HomePageComponents/HomePageContactSection'

const Home = () => {
  const featuresSectionRef = useRef<HTMLDivElement | null>(null)
  const servicesSectionRef = useRef<HTMLDivElement | null>(null)
  const heroSectionRef = useRef<HTMLDivElement | null>(null)

  const [hasAnimatedServices, setHasAnimatedServices] = useState(false)
  const [hasAnimatedHero, setHasAnimatedHero] = useState(false)

  useEffect(() => {
    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimatedServices) {
          setHasAnimatedServices(true)
          servicesObserver.disconnect()
        }
      })
    })

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
      if (servicesSectionRef.current) servicesObserver.disconnect()
      if (heroSectionRef.current) heroObserver.disconnect()
    }
  }, [hasAnimatedServices, hasAnimatedHero])

  return (
    <div>
      <HeroSection
        heroSectionRef={heroSectionRef}
        hasAnimatedHero={hasAnimatedHero}
        featuresSectionRef={featuresSectionRef}  
      />
      <FeaturesSection featuresSectionRef={featuresSectionRef} />
      <div ref={servicesSectionRef}>
        <ServicesSection hasAnimated={hasAnimatedServices} />
      </div>
      <ExpertiseSection />
      <Testimonials />
      <ContactSection />
    </div>
  )
}

export default Home