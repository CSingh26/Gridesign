"use client"

import React from "react"
import HeaderSection from "../Component/AboutPageComponents/HeaderSection"
import InfoCard from "../Component/AboutPageComponents/InfoCardSection"
import TeamSection from "../Component/AboutPageComponents/TeamSection"
import RootsSection from "../Component/AboutPageComponents/RootsSection"

const AboutPage = () => {
  return (
    <div className="pt-[120px] grid-backdrop">

      <HeaderSection />

      <section className="py-16 px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard 
          icon="eye"
          title="Vision"
          description="At Team Grid Design LLP, our vision is to be the ultimate fusion of creativity 
          and craftsmanship in the realms of branding, design, and printing. We aim to craft not just 
          designs, but immersive experiences that resonate and endure. Specializing in corporate and 
          event branding, including weddings, we bring ideas to life—from concept to flawless execution. 
          Through our precision in design and comprehensive printing services, we aspire to be the go-to 
          destination for impactful and unforgettable creative solutions."
        />
        <InfoCard 
          icon="bullseye"
          title="Mission"
          description="At Team Grid Design LLP, our mission is to seamlessly blend creativity with 
          craftsmanship, transforming ideas into memorable experiences. Specializing in branding for 
          companies, corporate events, and weddings, we are dedicated to delivering exceptional 
          design and printing services from concept to execution. Our goal is to leave a lasting 
          impact through innovative, detail-oriented solutions that elevate brands and captivate 
          audiences. We are the ultimate destination for all things creative, ensuring each project 
          reflects our commitment to excellence and perfection."
        />
        <InfoCard 
          icon="medal"
          title="Achievements"
          description="At Team Grid Design LLP, we pride ourselves on building strong networks and 
          delivering exceptional work on a global scale. We've had the privilege of collaborating 
          with some of the top event companies in Ahmedabad, designing hoardings and banners for 
          Singapore Supermarket, and handling international clients from Canada, New Zealand, 
          and Australia. Our work also includes organizing design exhibitions for Bharat Tex at 
          prestigious global events in Delhi, showcasing our expertise and commitment to excellence 
          on an international stage."
        />
      </section>

      <TeamSection />

      <RootsSection />

    </div>
  )
}

export default AboutPage