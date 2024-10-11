"use client"

import MapContainer from "../Component/ContactPageComponents/MapContainer"
import ContactForm from "../Component/ContactPageComponents/ContactForm"
import ContactInfo from "../Component/ContactPageComponents/ContactInfo"
import contactInfoData from "../../../public/data/contact.json"

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 pt-[260px] grid-backdrop">
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: Heading, Subheading, and Contact Details */}
          <ContactInfo contactInfo={contactInfoData} />

          {/* Right side: Contact Form */}
          <ContactForm />
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full">
        <MapContainer />
      </div>
    </div>
  )
}

export default ContactPage