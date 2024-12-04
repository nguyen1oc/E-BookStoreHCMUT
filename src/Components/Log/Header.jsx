import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Book from "./Book";
import LoginButton from "../Login/Login";

function Header() {
  return (
    <>
      <header id="header" className="bg-[#2D3250]">
        <div className="container mx-auto flex justify-between items-center p-6">
          {/* -- Logo -- */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-white ml-0">HCMUT E-Bookstore</span>
          </a>

          {/* -- Navigation -- */}
          <nav className="hidden xl:flex space-x-20">
            <a href="/" className="text-2xl text-white font-bold hover:text-[#F6B17A]">Home</a>
            <Link to="/books" className="text-2xl text-white font-bold hover:text-[#F6B17A]">
              Books
            </Link>
            <a href="#about" className="text-2xl text-white font-bold hover:text-[#F6B17A]">About Us</a>  
            <a href="#footer" className="text-2xl text-white font-bold hover:text-[#F6B17A]">Contacts</a>
          </nav>

          {/* -- Button -- */}
          <div className="flex items-center space-x-5">
            <nav className="hidden sm:flex space-x-10">
              <Link to ="/select">
              <BsCart3 size={45} className="text-white hover:text-[#F6B17A]" 
              />
              </Link>
            </nav> 
            <button
              className="border-2 border-[#7077A1] rounded-lg px-8 py-2 text-2xl text-white font-bold bg-transparent hover:bg-[#7077A1]"
               // Trigger popup visibility toggle on click
            >
              <Link to ="/select">
              Login
              </Link>
            </button>
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center space-x-5">
              <nav className="hidden md:flex space-x-10">
                <Link to ="/select">
                <VscBell size={45} className="text-white hover:text-[#F6B17A]" />
                </Link>
              </nav> 
              <nav className="hidden md:flex space-x-10">
                <Link to = "/select">
                <VscAccount size={45} className="text-white hover:text-[#F6B17A]"  />
                </Link>
              </nav> 
            </div>
          </div>
        </div>
      </header>

      {/* Conditionally render LoginButton if showPopup is true */}
      
    </>
  );
}

export default Header;