"use client"

import { useEffect, useRef, useState } from 'react'
import HeroSection from './Component/HomePageComponents/HeroSection'
import FeaturesSection from './Component/HomePageComponents/FeaturesSection'
import ServicesSection from './Component/HomePageComponents/ServiceSection'
import ExpertiseSection from './Component/HomePageComponents/ExpertiseSection'
import Testimonials from './Component/HomePageComponents/Testimonial'
import ContactSection from './Component/HomePageComponents/HomePageContactSection'

interface Service {
  title: string
  icon: string
  description: string
}

interface Testimonial {
  name: string
  title: string
  feedback: string
}

interface Feature {
  title: string
  image: string
  description: string
}

interface HeroSectionData {
  title: string
  subtitle: string
}

interface Skill {
  skill: string
  progress: number
}

interface ExpertiseData {
  heading: string
  description: string
  skills: Skill[]
}

interface HomePageData {
  heroSection: HeroSectionData
  services: Service[]
  features: Feature[]
  testimonials: {
    heading: string
    testimonialsList: Testimonial[]
  }
  expertise: ExpertiseData // Added this line
}

const Home = () => {
  const featuresSectionRef = useRef<HTMLDivElement | null>(null)
  const servicesSectionRef = useRef<HTMLDivElement | null>(null)
  const heroSectionRef = useRef<HTMLDivElement | null>(null)

  const [data, setData] = useState<HomePageData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/homePage.json")
        const jsonData = await response.json()
        setData(jsonData.homepage)
      } catch (error) {
        console.log("Error fetching the JSON data: ", error)
      }
    }
    fetchData()
  }, [])

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <HeroSection
        heroSectionRef={heroSectionRef}
        featuresSectionRef={featuresSectionRef}
        title={data.heroSection.title}
        subtitle={data.heroSection.subtitle}
      />
      <FeaturesSection
        featuresSectionRef={featuresSectionRef}
        features={data.features}
      />
      <div ref={servicesSectionRef}>
        <ServicesSection services={data.services} />
      </div>
      <ExpertiseSection expertise={data.expertise} /> {/* Pass expertise data here */}
      <Testimonials
        heading={data.testimonials.heading}
        testimonialsList={data.testimonials.testimonialsList}
      />
      <ContactSection />
    </div>
  )
}

export default Home