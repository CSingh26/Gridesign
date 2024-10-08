"use client"

import React, { useState, useEffect } from "react"
import { FaCircle } from "react-icons/fa"

interface Testimonial {
  name: string
  title: string
  feedback: string
}

interface TestimonialsProps {
  heading: string
  testimonialsList: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialsProps> = ({ heading, testimonialsList }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(2) // Default for larger screens
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>(testimonialsList)

  // Function to shuffle array and select a few items
  const shuffleArray = (array: any[], numItems: number) => {
    return array
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, numItems)
  }

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage) // Calculate total number of pages

  // Auto scroll function, change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, totalPages])

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  // Function to check screen size and adjust number of testimonials
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth

      if (screenWidth <= 768) {
        // Mobile screens
        setTestimonialsPerPage(1) // Show 1 per page
        setTestimonialsData(shuffleArray(testimonialsList, 4)) // Randomize and pick 4
      } else if (screenWidth >= 820 && screenWidth <= 1366) {
        // Tablets
        setTestimonialsPerPage(1) // Show 1 per page
        setTestimonialsData(testimonialsList.slice(0, 5)) // Show first 5 testimonials
      } else {
        // Desktop screens
        setTestimonialsPerPage(2) // Show 2 per page
        setTestimonialsData(testimonialsList) // Show all testimonials
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Call once on mount

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [testimonialsList])

  return (
    <section className="py-16 px-2 lg:px-0 w-full overflow-x-hidden">
      {/* Centered Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center heading mb-12">
        {heading}
      </h2>
      <div className="relative w-full mx-auto overflow-hidden">
        {/* Testimonial Cards */}
        <div className="flex justify-center items-start w-full">
          <div
            className="flex transition-transform duration-[800ms] ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalPages * 100}%`,
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`${
                  testimonialsPerPage === 1 ? "w-full px-4" : "w-1/2"
                } px-2 md:px-4 flex-shrink-0`}
                style={{ minHeight: "180px" }}
              >
                <div
                  className={`border border-gray-200 p-3 md:p-6 rounded-lg bg-white shadow-md transition-all duration-[800ms] ease-in-out transform hover:scale-105 h-auto flex flex-col justify-between`}
                  style={{
                    maxWidth: "100%",
                    wordBreak: "break-word",
                  }}
                >
                  {/* Inverted commas for feedback */}
                  <p className="text-3xl md:text-6xl text-[#000080] leading-none mb-2 md:mb-4">“</p>
                  {/* Text wrap and responsive font size */}
                  <p className="text-sm md:text-lg sub-heading mb-2 md:mb-4 break-words whitespace-normal overflow-hidden">
                    {testimonial.feedback}
                  </p>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-300"></div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold heading">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs md:text-sm sub-heading">
                        {testimonial.title}
                      </p>
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
  )
}

export default TestimonialSection