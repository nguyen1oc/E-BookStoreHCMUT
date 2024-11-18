import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function LHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const newTimer = setTimeout(() => {
      setIsHovered(false);
    }, 300); // 300ms delay (adjust as needed)
    setTimer(newTimer);
  };

  return (
    <header id="lheader" className="bg-[#2D3250]">
      <div className="container mx-auto flex justify-between items-center p-6">
        <a href="/loginpage" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-white ml-0">HCMUT E-Bookstore</span>
        </a>

        <nav className="hidden xl:flex space-x-20">
          <a href="/loginpage" className="text-2xl text-white font-bold hover:text-[#F6B17A]">Home</a>
          <Link to="/lbooks" className="text-2xl text-white font-bold hover:text-[#F6B17A]">Books</Link>
          <a href="#about" className="text-2xl text-white font-bold hover:text-[#F6B17A]">About Us</a>
          <a href="#footer" className="text-2xl text-white font-bold hover:text-[#F6B17A]">Contacts</a>
        </nav>

        <div className="flex items-center space-x-5">
          <nav className="hidden sm:flex space-x-10">
            <BsCart3 size={45} className="text-white hover:text-[#F6B17A]" />
          </nav>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center space-x-5">
            <nav className="hidden md:flex space-x-10">
              <VscBell size={45} className="text-white hover:text-[#F6B17A]" />
            </nav>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <VscAccount size={45} className="text-white hover:text-[#F6B17A] cursor-pointer" />
              {isHovered && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <ul className="py-2 text-[#7077A1]">
                    <li className="px-4 py-2 hover:bg-gray-200 hover:text-[#F6B17A] cursor-pointer">
                        <Link to="/profile">
                          Your Account
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 hover:text-[#F6B17A] cursor-pointer">Order items</li>
                    <li className="px-4 py-2 hover:bg-gray-200 hover:text-[#F6B17A] cursor-pointer">Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LHeader;
