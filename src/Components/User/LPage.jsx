import React, { useState } from "react";
import LHeader from "./LHeader";
//import Footer from "../Log/Footer";
import Footer from "../Log/Footer";
import LoginForm from "../Login/LoginForm";

function LBody() {
  return (
    <>
      <LHeader/>
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
        <h2 className="absolute ml-10 lg:justify-center text-[#070F2B] text-bold text-5xl">
          ENJOY YOUR TIME IN OUR PLACE!!
        </h2>
      </div>
      <Footer/>
    </>
  );
}

export default LBody;
