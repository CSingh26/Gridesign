"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold heading text-[#000080] mb-2">Let's Talk</h1>
      <p className="text-lg sub-heading text-gray-700 mb-8">
        We would love to hear from you. Reach out to us through any of the options below.
      </p>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gray-100 rounded-full">
            <FaPhoneAlt className="text-[#000080] text-2xl" />
          </div>
          <p className="text-lg sub-heading text-[#00a669]">+91 851-113-3277</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gray-100 rounded-full">
            <FaEnvelope className="text-[#000080] text-2xl" />
          </div>
          <p className="text-lg sub-heading text-[#00a669]">purva@teamgridesign.com</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gray-100 rounded-full">
            <FaMapMarkerAlt className="text-[#000080] text-2xl" />
          </div>
          <p className="text-lg sub-heading text-[#00a669]">
            A- 11th Floor Krish Cubical <br />
            Sindhu Bhawan Marg <br />
            Thaltej - Ahmedabad, <br />
            Gujarat - 380059
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;