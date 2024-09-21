// HeroBanner.js
import React, { useState } from 'react';
import gif from '../../assets/loading1.gif';
import staticImage from '../../assets/static-image.png'; 
export default function HeroBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-white w-full flex flex-col md:flex-row justify-evenly items-center h-screen bg-cover bg-center relative">
      {/* Left Section: Text and Button */}
      <div className="p-6 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Join the Thrill of Cricket
        </h1>
        <p className="text-lg mb-6">
          Register now for upcoming tournaments in various formats and showcase
          your talent.
        </p>
        <button className="bg-gradient-to-r from-green-800 to-green-900 py-2 px-5 rounded-full font-medium transition duration-300 hover:scale-105">
          Get Started
        </button>
      </div>

      <div className="mx-auto md:w-1/2 flex justify-center">
        <img
          src={isHovered ? gif : staticImage}
          alt="hero"
          className="w-2/3 max-w-md transition duration-300 rounded-[28px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}
