import React, { useState } from "react";
import LogHeader from "./LoginHeader";
import LFooter from "./LFooter";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
function Signup({ handleGoBackToLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || {}; 
  return (
    <>
        <LogHeader />
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg w-1/3 shadow-lg">
            <>
            <h2 className="text-2xl font-bold text-center mb-6 text-[#2D3250]">Sign Up</h2>
              
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
                    <label className="block text-sm font-medium text-[#2D3250]">Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                      placeholder="Enter email"
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
                  <div>
                    <label className="block text-sm font-medium text-[#2D3250]">Verify Password:</label>
                    <input
                      type="password"
                      value={verifyPassword}
                      onChange={(e) => setVerifyPassword(e.target.value)}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                      placeholder="Verify password"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A] mt-4"
                >
                  <Link to ="/select">
                  Sign Up
                  </Link>
                </button>
              <div className="flex justify-between mt-4 mb-2">
                <button
                  className="text-[#7077A1] hover:text-[#2D3250] text-sm"
                >
                <Link to="/loginform" state={{ userType }}>Back to Login</Link>
                </button>
              </div>
              
            </>
        </div>
      </div>
            <LFooter/>
    </>
  );
}

export default Signup;