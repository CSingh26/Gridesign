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
    <nav className="flex items-center justify-between py-4 px-6 lg:px-12 relative">
      
      <div className="flex items-center space-x-4 lg:pl-6">
        <Link href="/">
          <img src="/assests/Logo.png" alt="Company Logo" className='h-12 lg:h-14' />
        </Link>
        <span className="text-gray-600 font-semibold text-lg lg:text-xl border-l pl-4">TEAM GRID DESIGN</span>
      </div>

      <ul className="hidden lg:flex text-gray-600 text-base lg:text-xl absolute left-1/2 transform -translate-x-1/2 space-x-6 lg:space-x-12 xl:space-x-20">
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

      <div className="hidden lg:flex space-x-6 lg:space-x-8 xl:space-x-10 pr-6">
        <a href="https://www.instagram.com/teamgridesign/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-600 text-xl lg:text-2xl transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/company/teamgridesign/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-600 text-xl lg:text-2xl transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://www.facebook.com/gridesign.in/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-600 text-xl lg:text-2xl transition-transform duration-200 hover:scale-110" />
        </a>
      </div>

      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <FaBars className='text-gray-600 text-3xl' />
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <button onClick={toggleMenu} className='absolute top-6 right-6 text-white text-4xl'>
          <FaTimes />
        </button>
        <ul className="text-white text-2xl lg:text-3xl space-y-6 lg:space-y-8">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
            <li
              key={item}
              className={`transform transition-transform duration-500 ease-in-out ${
                isMenuOpen
                  ? `translate-x-0 opacity-100 delay-${index * 100}`
                  : `-translate-x-full opacity-0`
              } hover:scale-110`}
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
