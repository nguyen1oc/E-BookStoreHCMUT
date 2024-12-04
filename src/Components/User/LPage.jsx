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
          className="relative items-center mt-12 mb-12  container flex flex-wrap lg:flex-nowrap items-center bg-gray-100 shadow-lg"
          >
          {/* Phần chữ bên trái */}
          <div className="w-full lg:w-2/3 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#2D3250]">Hi, USERNAME!</h2>
            <p className="text-[#7077A1] text-lg mb-6 leading-relaxed text-2xl">
              ENJOY YOUR TIME IN OUR PLACE!!
            </p>
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

export default LBody;
