import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import LFooter from "./LFooter";
import LogHeader from "./LoginHeader";

function LoginForm() {
  // Cac ham de giu cac du lieu va chuyeh huong
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || {}; 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
          const data = await response.json();
          localStorage.setItem("user_id", data.user_id);
          console.log("Login successful:", data);
          if (userType === "User") {
              navigate("/userdashboard");
          } else if (userType === "Publisher") {
              navigate("/publisherdashboard");
          } else if (userType === "Author") {
              navigate("/authordashboard");
          }
      } else {
          const errorText = await response.text();
          console.error("Login failed:", errorText);
          alert("Login failed: " + errorText);
      }
  } catch (error) {
      console.error("Error during login:", error);
  }
  };


  return (
    <>
      {/* Muc login cua page */}
      <LogHeader />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg w-1/3 shadow-lg">
            <>
              <h2 className="text-2xl font-bold text-center mb-6 text-[#2D2350]">
                Login
              </h2>
              <form action = "/login" method = "POST" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2D3250]">Username:</label>
                    <input
                      type="text"
                      value={username}
                      name = "username"
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2D3250]">Password:</label>
                    <input
                      type="password"
                      value={password}
                      name = "password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                      placeholder="Enter password"
                      required
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