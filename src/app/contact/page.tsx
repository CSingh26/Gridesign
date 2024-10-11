"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const ContactPage = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 23.049060943449003,
    lng: 72.50872468310207,
  };

  const apiKEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKEY) {
    throw new Error("Missing Google Maps API key.");
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 pt-[260px] grid-backdrop">
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: Heading, Subheading, and Contact Details */}
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
                    Sindhu Bhawan Marg < br/> 
                    Thaltej - Ahmedabad, <br />
                    Gujarat - 380059
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00a669]"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00a669]"
                required
              />
              <textarea
                placeholder="Message"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00a669]"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-[#00a669] text-white rounded-md hover:bg-[#008b54] transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full">
        <LoadScript googleMapsApiKey={apiKEY}>
          <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ContactPage;