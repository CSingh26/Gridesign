import React from 'react'

interface HeaderSectionProps {
  title: string;
  subtitle: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="relative pt-24">
      <h1 className="text-center text-6xl font-bold heading">{title}</h1>
      <p className="text-center text-xl text-gray-600 mt-4 sub-heading pb-10">
        {subtitle}
      </p>
    </div>
  )
}

export default HeaderSection