"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes, FaCaretDown, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flex items-center justify-between lg:justify-center py-4 px-6 lg:px-12 relative navbar-font">
      <div className="flex items-center justify-between w-full lg:justify-center lg:space-x-16">

        {/* Logo */}
        <div className="flex-shrink-0 lg:pr-8">
          <Link href="/">
            <img src="/assests/Logo.png" alt="Company Logo" className='h-[7.95rem] lg:h-[9.95rem]' />  
          </Link>
        </div>

        {/* Navigation Links - Visible only on large screens */}
        <ul className="hidden lg:flex justify-center items-center text-[#000080] text-base lg:text-xl px-4 lg:px-8 space-x-6 lg:space-x-12">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li className="relative group">
            <button className="flex items-center space-x-1 lg:space-x-2">
              Contact
              <FaCaretDown className="text-sm" />
            </button>
            <ul className="absolute mt-2 bg-white rounded-lg p-4 space-y-2 text-sm text-gray-700 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>+91 990-990-8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>hello@example.com</span>
              </li>
              <li>
                <Link href="/contact">Query Form</Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Social Icons - Visible only on large screens */}
        <div className="hidden lg:flex space-x-6 lg:space-x-8 pl-4 lg:pl-8">
          <a href="https://www.instagram.com/teamgridesign/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#000080] text-xl lg:text-2xl transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/company/teamgridesign/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#000080] text-xl lg:text-2xl transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://www.facebook.com/gridesign.in/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-[#000080] text-xl lg:text-2xl transition-transform duration-200 hover:scale-110" />
          </a>
        </div>

        {/* Mobile Menu Button - Visible only on small screens */}
        <div className={`lg:hidden cursor-pointer ml-auto ${isMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
          <FaBars className='text-[#000080] text-3xl' />
        </div>
      </div>

      {/* Mobile Fullscreen Menu - Visible only when toggled on small screens */}
      <div
        className={`fixed inset-0 bg-[#00a669] bg-opacity-80 flex flex-col items-center justify-center z-50 transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <button onClick={toggleMenu} className='absolute top-6 right-6 text-white text-4xl'>
          <FaTimes />
        </button>
        <ul className="text-[#000080] text-2xl space-y-6">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
            <li
              key={item}
              className={`transform transition-transform duration-500 ease-in-out ${
                isMenuOpen
                  ? `translate-x-0 opacity-100 delay-${index * 100}`
                  : `-translate-x-full opacity-0`
              } hover:text-white hover:scale-110`}
            >
              <Link href={`/${item.toLowerCase()}`} onClick={toggleMenu}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
