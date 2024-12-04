import React, { useState, useEffect } from "react";
import LHeader from "./LHeader";
//import Footer from "../Log/Footer";
import Footer from "../Log/Footer";
import LoginForm from "../Login/LoginForm";

function LBody() {
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user_id = localStorage.getItem("user_id");
      if(!user_id) {
        console.error("User ID not found!");
        return;
      }
      try {
        const res = await fetch(`http://localhost:5000/userdashboard?user_id=${user_id}`);
        if (!res.ok) throw new Error("Failed to fetch user info");
        const result = await res.json();
        setUsername(result);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!username) return <p>Loading...</p>;

  return (
    <>
      <LHeader/>
      <div
          id="home"
          className="relative items-center mt-12 mb-12  container flex flex-wrap lg:flex-nowrap items-center bg-gray-100 shadow-lg"
          >
          {/* Phần chữ bên trái */}
          <div className="w-full lg:w-2/3 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#2D3250]">Hi, {username.user_name}!</h2>
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