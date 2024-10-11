"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Trigger scroll detection when the page loads
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarBackground = !isScrolled ? 'bg-transparent' : 'bg-white shadow-md'

  return (
    <nav className={`navbar-fonts fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBackground}`}>
      <div className="flex items-center justify-between lg:justify-center py-4 px-6 lg:px-12 relative">
        <div className="flex items-center justify-between w-full lg:justify-center lg:space-x-16">

          <div className="flex-shrink-0 lg:pr-8">
            <Link href="/">
              <img src="/assests/Logo.png" alt="Company Logo" className='h-[5rem] md:h-[7.95rem] lg:h-[9.95rem]' />
            </Link>
          </div>

          <ul className="hidden lg:flex justify-center items-center text-[#000080] text-base lg:text-xl px-4 lg:px-8 space-x-6 lg:space-x-12">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <div className="hidden lg:flex space-x-6 lg:space-x-8 pl-4 lg:pl-8">
            <a href="https://www.instagram.com/teamgridesign/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#00a669] text-xl lg:text-2xl transition-transform duration-200 hover:scale-110"/>
            </a>
            <a href="https://www.linkedin.com/company/teamgridesign/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#00a669] text-xl lg:text-2xl transition-transform duration-200 hover:scale-110" />
            </a>
            <a href="https://www.facebook.com/gridesign.in/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[#00a669] text-xl lg:text-2xl transition-transform duration-200 hover:scale-110" />
            </a>
          </div>

          <div className={`lg:hidden cursor-pointer ml-auto ${isMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
            <FaBars className='text-[#000080] text-3xl' />
          </div>
        </div>

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
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={toggleMenu}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar