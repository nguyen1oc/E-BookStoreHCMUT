import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function LHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [isBellHovered, setIsBellHovered] = useState(false); 
  const [timer, setTimer] = useState(null);
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState(false); // State for logout popup
  const { totalItems } = useCart();

  const navigate = useNavigate();

  const BellEnter =()=>{
    if (timer) clearTimeout(timer);
    setIsBellHovered(true);
  }

  const BellLeave =()=>{
    const newTimer = setTimeout(() => {
      setIsBellHovered(false);
    }, 300); 
    setTimer(newTimer);
  }

  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const newTimer = setTimeout(() => {
      setIsHovered(false);
    }, 300); 
    setTimer(newTimer);
  };

  const handleLogoutClick = () => {
    setIsLogoutPopupVisible(true); // Show the logout confirmation popup
  };

  const handleLogoutConfirm = () => {
    setIsLogoutPopupVisible(false); // Close the popup
    navigate("/"); // Redirect to homepage
  };

  const handleLogoutCancel = () => {
    setIsLogoutPopupVisible(false); // Close the popup
  };

  return (
    <header id="lheader" className="bg-[#2D3250]">
      <div className="container mx-auto flex justify-between items-center p-6">
        <a href="/userdashboard" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-white ml-0">HCMUT E-Bookstore</span>
        </a>

        <nav className="hidden xl:flex space-x-20">
          <a href="/userdashboard" className="text-2xl text-white font-bold hover:text-[#F6B17A]">Home</a>
          <Link to="/lbooks" className="text-2xl text-white font-bold hover:text-[#F6B17A]">Books</Link>
          <a href="#about" className="text-2xl text-white font-bold hover:text-[#F6B17A]">About Us</a>
          <a href="#footer" className="text-2xl text-white font-bold hover:text-[#F6B17A]">Contacts</a>
        </nav>

        <div className="flex items-center space-x-5">
          <div className="relative"
          >
          <Link to="/cart" className="relative">
            <BsCart3 size={45} className="text-white hover:text-[#F6B17A] cursor-pointer" />
            {totalItems >= 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-sm px-2">
                {totalItems}
              </span>
            )}
          </Link>
          </div>

          {/* bang menu*/}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center space-x-5">
            <div className="relative"
               onMouseEnter={BellEnter}
               onMouseLeave={BellLeave}
            >
              <VscBell size={45} className="text-white hover:text-[#F6B17A]" />
              {isBellHovered && (
                <div className="absolute right-2 top-full mt-2 ml-5 w-48 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2 text-[#7077A1]">
                    <li className="px-4 py-2 text-center">
                      Don't have any notifications
                    </li>
                  </ul>
                </div>
              )}
            </div>

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
                      <Link to="/profile/information">
                        Your Account
                      </Link>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:text-[#F6B17A] cursor-pointer"
                      onClick={handleLogoutClick} // Show logout confirmation popup
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Popup */}
      {isLogoutPopupVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3 text-center">
            <p className="text-xl mb-4">Are you sure you want to logout?</p>
            <div className="space-x-4">
              <button
                onClick={handleLogoutConfirm}
                className="bg-[#F6B17A] text-white py-2 px-4 rounded-lg hover:bg-[#e0925b]"
              >
                Yes
              </button>
              <button
                onClick={handleLogoutCancel}
                className="bg-[#7077A1] text-white py-2 px-4 rounded-lg hover:bg-[#4e5d7b]"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default LHeader;
