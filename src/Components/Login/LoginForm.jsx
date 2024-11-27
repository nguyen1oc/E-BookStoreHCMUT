import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import LFooter from "./LFooter";
import LogHeader from "./LoginHeader";

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || {}; 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      if (userType === "User") {
        navigate("/userdashboard");
      } else if (userType === "Publisher") {
        navigate("/publisherdashboard");
      } else if (userType === "Author") {
        navigate("/authordashboard");
      }
    }
  };


  return (
    <>
      <LogHeader />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg w-1/3 shadow-lg">
            <>
              <h2 className="text-2xl font-bold text-center mb-6 text-[#2D2350]">
                Login
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2D3250]">Username:</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                      placeholder="Enter username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2D3250]">Password:</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <hr className="mt-5 border-t border-[#7077A1]" />
              <div className="flex justify-between">
                <button
                  className="text-[#7077A1] hover:text-[#2D3250] text-sm mt-2"
                >
                  <Link to = "/signup">
                  Sign Up
                  </Link>
                </button>
                <button
                  className="text-[#7077A1] hover:text-[#2D3250] text-sm mt-2"
                  
                >
                  <Link to ="/forget">
                  Forgot Password?
                  </Link>
                </button>
              </div>
                <button
                  type="submit"
                  className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A] mt-4"
                >
                  Login
                </button>
              </form>
              
            </>
        </div>
      </div>
      <LFooter />
    </>
  );
}

export default LoginForm;
