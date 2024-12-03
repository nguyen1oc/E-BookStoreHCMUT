import React from "react";
import LFooter from "./LFooter";
import LogHeader from "./LoginHeader";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <>

      {/* Chon 3 vai tro cua nguoi dung thoi */}
      <LogHeader />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg w-1/3 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#2D2350]">Select Option</h2>
          <div className="space-y-4">
            <Link to="/loginform" state={{ userType: "User", redirectPath: "/userdashboard" }}>
              <button className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A] mb-5">
                User
              </button>
            </Link>
            <Link to="/loginform" state={{ userType: "Publisher", redirectPath: "/publisherdashboard" }}>
              <button className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A] mb-5">
                Publisher
              </button>
            </Link>
            <Link to="/loginform" state={{ userType: "Author", redirectPath: "/authordashboard" }}>
              <button className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A] mb-5">
                Author
              </button>
            </Link>
          </div>
        </div>
      </div>
      <LFooter />
    </>
  );
}

export default LoginButton;
