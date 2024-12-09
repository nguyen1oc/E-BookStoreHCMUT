import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Body() {
  // State to track whether the "Learn More" section is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Handler to toggle the expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Header/>
      <div
          id="home"
          className="relative items-center mt-12 mb-12  container flex flex-wrap lg:flex-nowrap items-center bg-gray-100 shadow-lg"
          >
          {/* Phần chữ bên trái */}
          <div className="w-full lg:w-2/3 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#2D3250]">WELCOME TO OUR E-BOOKSTORE!</h2>
          </div>
          
          {/* Phần ảnh bên phải */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0 ">
            <img
              src="./src/assets/bkh.jpg"
              className="scale-100 ml-"
            />
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default Body;