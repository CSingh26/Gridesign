"use client"

import { IconType } from "react-icons"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

// Type for a single contact detail item
type ContactDetail = {
  type: string
  icon: string
  value: string
}

// Type for the props
type ContactInfoProps = {
  contactInfo: {
    heading: string
    subHeading: string
    contactDetails: ContactDetail[]
  }
}

// Icon map for dynamic rendering
const iconMap: { [key: string]: IconType } = {
  FaPhoneAlt: FaPhoneAlt,
  FaEnvelope: FaEnvelope,
  FaMapMarkerAlt: FaMapMarkerAlt,
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold heading text-[#000080] mb-2">{contactInfo.heading}</h1>
      <p className="text-lg sub-heading text-gray-700 mb-8">
        {contactInfo.subHeading}
      </p>

      <div className="space-y-6">
        {contactInfo.contactDetails.map((detail, index) => {
          const IconComponent = iconMap[detail.icon]
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="p-3 bg-gray-100 rounded-full">
                {IconComponent && <IconComponent className="text-[#000080] text-2xl" />}
              </div>
              <p className="text-lg sub-heading text-[#00a669]">
                {detail.value.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ContactInfo