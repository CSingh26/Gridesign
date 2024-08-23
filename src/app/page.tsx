"use client";

import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa"

const ComingSoon = () => {
  return (
    <div
      className="flex flex-col items-center justify-start h-screen text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/image.png')`,
      }}
    >
      <div className="mt-20"> {/* Add margin-top here */}
        <p className="text-7xl font-semibold">Coming Soon</p>
        <div className="mt-10 text-2xl">
          <p>Stay Connected</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.instagram.com/gridesign.in?igsh=dTZpeXJ1bWJvOW1y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://www.linkedin.com/company/teamgridesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;