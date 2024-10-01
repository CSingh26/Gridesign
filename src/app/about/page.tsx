"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faMedal } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <div className="pt-[120px] grid-backdrop"> {/* Apply grid-backdrop class here */}
      {/* About Us Heading */}
      <div className="relative pt-24">
        <h1 className="text-center text-5xl font-bold text-[#000080]">About Us</h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Learn more about what we do, how we do it, and why we do it.
        </p>
      </div>

      {/* Cards Section */}
      <section className="py-16 px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Vision Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <FontAwesomeIcon icon={faEye} className="text-[#000080] text-5xl mb-4" />
          <h3 className="text-xl font-bold text-[#000080] mb-2">Vision</h3>
          <p className="text-gray-600">
            Our vision is to be the forefront of innovation, delivering creative solutions that empower brands to grow and excel in an ever-changing digital landscape. We aim to inspire creativity and build strong relationships that last.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <FontAwesomeIcon icon={faBullseye} className="text-[#000080] text-5xl mb-4" />
          <h3 className="text-xl font-bold text-[#000080] mb-2">Mission</h3>
          <p className="text-gray-600">
            Our mission is to combine cutting-edge technology with creative design to craft personalized, innovative solutions that not only meet but exceed our client&apos;s expectations. We strive to make each project impactful and memorable.
          </p>
        </motion.div>

        {/* Achievements Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <FontAwesomeIcon icon={faMedal} className="text-[#000080] text-5xl mb-4" />
          <h3 className="text-xl font-bold text-[#000080] mb-2">Achievements</h3>
          <p className="text-gray-600">
            Over the years, we’ve partnered with numerous high-profile clients and delivered outstanding branding solutions that have been recognized globally. Our dedication has earned us accolades in design and event curation.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;