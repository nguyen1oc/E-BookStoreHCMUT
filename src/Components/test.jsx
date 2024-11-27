import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LFooter from "./LFooter";
import LogHeader from "./LoginHeader";

function LoginForm() {
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || {}; // Get user type from location state

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

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

  const handleForgotPassword = () => {
    setIsResetPassword(true);
  };

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleGoBackToLogin = () => {
    setIsResetPassword(false);
    setIsSignUp(false);
  };

  return (
    <>
      <LogHeader />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg w-1/3 shadow-lg">
          {isResetPassword ? (
             <>
             <h2 className="text-2xl font-bold text-center mb-6 text-[#2D3250]">Reset Password</h2>
             <form onSubmit={handleSubmit}>
               <div className="space-y-4">
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
                   <label className="block text-sm font-medium text-[#2D3250]">Old Password:</label>
                   <input
                     type="password"
                     value={oldPassword}
                     onChange={(e) => setOldPassword(e.target.value)}
                     className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                     placeholder="Enter old password"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-[#2D3250]">New Password:</label>
                   <input
                     type="password"
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                     className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                     placeholder="Enter new password"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-[#2D3250]">Verify New Password:</label>
                   <input
                     type="password"
                     value={verifyPassword}
                     onChange={(e) => setVerifyPassword(e.target.value)}
                     className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
                     placeholder="Verify new password"
                   />
                 </div>
               </div>
               <button
                 type="submit"
                 className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A] mt-4"
               >
                 Reset Password
               </button>
             </form>
             <div className="flex justify-between mt-4 mb-2">
               <button
                 className="text-[#7077A1] hover:text-[#2D3250] text-sm"
                 onClick={handleGoBackToLogin}
               >
                 Back to Login
               </button>
             </div>
           </>
          ) : isSignUp ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-6 text-[#2D3250]">Sign Up</h2>
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
                  Sign Up
                </button>
              </form>
              <div className="flex justify-between mt-4 mb-2">
                <button
                  className="text-[#7077A1] hover:text-[#2D3250] text-sm"
                  onClick={handleGoBackToLogin}
                >
                  Back to Login
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mb-6 text-[#2D2350]">
                Login as {userType}
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
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                <button
                  className="text-[#7077A1] hover:text-[#2D3250] text-sm mt-2"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
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
          )}
        </div>
      </div>
      <LFooter />
    </>
  );
}

export default LoginForm;
