"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes, FaCaretDown, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
      
      <div className="flex items-center space-x-4 pl-6">
        <Link href="/">
          <img src="/assests/Logo.png" alt="Company Logo" className='h-14' />
        </Link>
        <span className="text-gray-600 font-semibold text-xl border-l pl-4">FROM THE BASIC</span>
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-600 text-xl flex-grow justify-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={toggleDropdown}
          >
            Contact
            <FaCaretDown className="text-sm" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 space-y-2 text-sm text-gray-700">
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
          )}
        </li>
      </ul>

      <div className="hidden md:flex space-x-4 pr-6">
        <a href="https://www.instagram.com/teamgridesign/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-600 text-2xl" />
        </a>
        <a href="https://www.linkedin.com/company/teamgridesign/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-600 text-2xl" />
        </a>
        <a href="https://www.facebook.com/gridesign.in/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-600 text-2xl" />
        </a>
      </div>

      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <FaBars className='text-gray-600 text-3xl' />
      </div>

      {isMenuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50'>
          <button onClick={toggleMenu} className='absolute top-6 right-6 text-white text-4xl'>
            <FaTimes />
          </button>
          <ul className="text-white text-3xl space-y-8">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
