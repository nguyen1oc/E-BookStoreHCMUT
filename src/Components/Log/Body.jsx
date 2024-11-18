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
      {/* Welcome Section */}
      <div
        id="home"
        className="relative flex justify-center items-center mt-12 mb-12"
      >
        {/* Background Image */}
        <img
          src="https://img.freepik.com/free-photo/blue-plastic-strews_23-2147988422.jpg?ga=GA1.1.1445980879.1731164125&semt=ais_hybrid"
          alt="Image"
          className="w-full h-[500px] object-cover opacity-50"
        />
        {/* Welcome Message */}
        <h2 className="absolute ml-10 lg:justify-center text-[#070F2B] text-bold text-5xl">
          WELCOME TO OUR HOMEPAGE!!
        </h2>
      </div>
      <Footer/>
    </>
  );
}

export default Body;
