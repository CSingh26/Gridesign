"use client"

import React, { useEffect, useState } from "react"
import HeaderSection from "../Component/AboutPageComponents/HeaderSection"
import InfoCard from "../Component/AboutPageComponents/InfoCardSection"
import TeamSection from "../Component/AboutPageComponents/TeamSection"
import RootsSection from "../Component/AboutPageComponents/RootsSection"

interface InfoCardType {
  icon: "eye" | "bullseye" | "medal";
  title: string;
  description: string;
}

interface TeamSectionType {
  title: string;
  subtitle: string;
  personName: string;
  description: string;
  image: string;
}

interface RootsSectionType {
  title: string;
  description: string;
  image: string;
}

interface AboutData {
  header: {
    title: string;
    subtitle: string;
  };
  infoCards: InfoCardType[];
  teamSection: TeamSectionType;
  rootsSection: RootsSectionType;
}

const AboutPage = () => {
  const [data, setData] = useState<AboutData | null>(null)

  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/aboutCards.json")
        const jsonData = await response.json()
        setData(jsonData.about)
      } catch (error) {
        console.log("Error fetching the JSON data: ", error)
      }
    }
    fetchData()
  }, [])

  if (!data) return <div>Loading...</div>;
  return (
    <div className="pt-[120px] grid-backdrop">

      <HeaderSection 
      title={data.header.title}
      subtitle={data.header.subtitle}
      />

      <section className="py-16 px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.infoCards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>

      <TeamSection
        title={data.teamSection.title}
        subtitle={data.teamSection.subtitle}
        personName={data.teamSection.personName}
        description={data.teamSection.description}
        image={data.teamSection.image}
      />

      <RootsSection
        title={data.rootsSection.title}
        description={data.rootsSection.description}
        image={data.rootsSection.image}
      />

    </div>
  )
}

export default AboutPage