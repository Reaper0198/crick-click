// Navbar.js
import React, { useState } from "react";
import logo from "../../assets/ball.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (

    <nav className="bg-[rgba(0,0,0,0.6)] z-10 fixed top-0 left-0 w-full text-white px-4 py-4">
      <div className="flex justify-around items-center"> 

        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-xl md:text-2xl font-bold">CrickClick</h1>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <form className="relative text-black">
            <input
              type="text"
              className="w-full rounded-md border-gray-300 px-5 py-2 focus:outline-none hidden md:block"
              placeholder="Search"
            />
            <div className="absolute text-white md:text-black inset-y-0 right-0 flex items-center px-2">
              <FaSearch />
            </div>
          </form>

          <div className="space-x-4 hidden md:flex">
            <a href="#" className="hover:underline">
              Schedule
            </a>
            <a href="#" className="hover:underline">
              News
            </a>
            <a href="#" className="hover:underline">
              Tickets
            </a>
          </div>

          <div className=" space-x-2 hidden md:flex">
            <button className="bg-gradient-to-r from-green-800 to-green-900 font-thin py-2 px-5 rounded-full">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-green-800 to-green-900 py-2 px-5 rounded-full font-thin">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-start mt-2 space-y-2">
          <a href="#" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">
            Schedule
          </a>
          <a href="#" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">
            News
          </a>
          <a href="#" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">
            Tickets
          </a>
          <a href="#" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">
            Sign In
          </a>
          <a href="#" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">
            Sign Up
          </a>
          
        </div>
      )}
    </nav>

  );
};

export default Navbar;
