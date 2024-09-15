"use client";

import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";

// Testimonial data (8 testimonials)
const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Co.",
    feedback:
      "Team Grid Design LLP transformed our brand into something truly exceptional. Their work ethic is amazing!",
  },
  {
    name: "Jane Smith",
    title: "Founder, Creative Studio",
    feedback:
      "Their design skills are top-notch. They helped us create a logo that resonates with our audience.",
  },
  {
    name: "David Lee",
    title: "Marketing Manager, InnovateX",
    feedback:
      "Working with Team Grid Design LLP was a pleasure. Their social media design really elevated our online presence.",
  },
  {
    name: "Sarah Brown",
    title: "Founder, Artisanal Crafts",
    feedback:
      "I absolutely love the logo they designed for me. It truly captures the essence of my brand.",
  },
  {
    name: "Michael Scott",
    title: "Manager, Dunder Mifflin",
    feedback:
      "Their creativity is unmatched. They delivered more than we expected, and we couldn’t be happier.",
  },
  {
    name: "Emily Davis",
    title: "Owner, Bakery Delights",
    feedback:
      "We saw an increase in sales after using their branding strategies. Highly recommend them!",
  },
  {
    name: "Chris Evans",
    title: "Founder, Sports Gear",
    feedback:
      "A fantastic team with great ideas! The designs exceeded our expectations.",
  },
  {
    name: "Olivia Johnson",
    title: "CEO, Fashion Forward",
    feedback:
      "Our website and brand now truly reflect our vision, thanks to Team Grid Design LLP.",
  },
];

// Function to shuffle array and select a few items
const shuffleArray = (array: any[], numItems: number) => {
  return array.sort(() => 0.5 - Math.random()).slice(0, numItems);
};

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(2); // Default for larger screens
  const [testimonialsData, setTestimonialsData] = useState(testimonials); // Testimonials to display

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage); // Calculate total number of pages

  // Auto scroll function, change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  // Function to check screen size and adjust number of testimonials
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        // Mobile screens (iPhone/Samsung)
        setTestimonialsPerPage(1); // Show 1 per page
        setTestimonialsData(shuffleArray(testimonials, 4)); // Randomize and pick 4
      } else if (screenWidth <= 1024) {
        // Tablets (iPad Mini, Air)
        setTestimonialsPerPage(1); // Show 1 per page on medium screens
        setTestimonialsData(testimonials); // Show all testimonials
      } else {
        // Desktop screens
        setTestimonialsPerPage(2); // Show 2 per page on large screens
        setTestimonialsData(testimonials); // Show all testimonials
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-16 px-2 lg:px-0 w-full overflow-x-hidden">
      {/* Centered Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="relative w-full mx-auto overflow-hidden">
        {/* Testimonial Cards */}
        <div className="flex justify-center items-start w-full">
          <div
            className="flex transition-transform duration-[800ms] ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalPages * 100}%`, // Ensure width of container holds all testimonials
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`${
                  testimonialsPerPage === 1 ? "w-full" : "w-1/2"
                } px-2 md:px-4 flex-shrink-0`}
                style={{ minHeight: "200px" }} // Ensure cards have a minimum height
              >
                <div
                  className={`border border-gray-200 p-4 md:p-6 rounded-lg bg-white ${
                    testimonialsPerPage === 1 ? "" : "shadow-lg"
                  } transition-all duration-[800ms] ease-in-out transform hover:scale-105 h-auto flex flex-col justify-between`}
                >
                  {/* Inverted commas for feedback */}
                  <p className="text-4xl md:text-6xl text-[#000080] leading-none mb-4">“</p>
                  {/* Text wrap and responsive font size */}
                  <p className="text-sm md:text-lg text-gray-600 mb-4 break-words whitespace-normal">
                    {testimonial.feedback}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-300"></div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <FaCircle
              key={index}
              size={10}
              className={`cursor-pointer ${
                currentIndex === index ? "text-[#000080]" : "text-[#00a669]"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;