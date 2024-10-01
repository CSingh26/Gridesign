"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faMedal } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <div className="pt-[120px] grid-backdrop">
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

      {/* Separation Heading */}
      <div className="py-16">
        <h2 className="text-center text-4xl font-bold text-[#000080]">Meet Our Team & Our Story</h2>
        <p className="text-center text-lg text-gray-600 mt-4">
          Get to know the person behind the brand and learn about the roots of Grid Design.
        </p>
      </div>

      {/* Person Behind the Company Section */}
      <section className="py-16 px-4 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/assets/person.jpg"
            alt="Person Behind the Company"
            className="rounded-lg shadow-lg max-w-[90%] lg:max-w-full"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-[#000080] mb-4">Purva Singh</h2>
          <p className="text-lg text-gray-600">
          Meet Purva, the visionary founder of Team Grid Design. A BBA graduate with certifications in graphic design and 2D animation, 
          Purva has spent the last six years transforming brands and weddings with her creative expertise. From global exhibitions to 
          personalized wedding designs, her work spans a diverse clientele across the world. Driven by passion and dedication, 
          Purva is committed to elevating her company, blending artistry with leadership. Beyond her professional achievements, 
          she enjoys music, dance, writing, and culinary arts, all while drawing strength from her family and friends. 
          Welcome to Team Grid Design, where Purva makes dreams a reality.
          </p>
        </motion.div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-16 px-4 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-[#000080] mb-4">Our Roots</h2>
          <p className="text-lg text-gray-600">
            Grid Design was founded with the vision of transforming how brands interact with their audiences. Starting as a small creative studio, we have grown into a full-service design firm, providing innovative solutions for branding, web design, and digital marketing. Our commitment to excellence and passion for design has earned us a reputation as one of the top design agencies globally.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/assets/company.jpg"
            alt="Company Roots"
            className="rounded-lg shadow-lg max-w-[90%] lg:max-w-full"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;