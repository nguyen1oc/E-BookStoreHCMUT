import React, { useState } from "react";
import LHeader from "./LHeader";
import Footer from "../Log/Footer";

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState("My Account"); // Default option

  // Function to render content based on selected option
  const renderContent = () => {
    switch (selectedOption) {
      case "My Account":
        return <>
                    <div className="text-[#424769]">
                        <h2 className="font-bold"> YOUR PROFILE</h2>
                        <h3 className="text-[#424769]"> Configure your information to secure the account</h3>
                        <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />
                        <div className="container flex">
                            <div className="w-1/5 text-right font-bold">
                                <p>Username:</p>
                                <p>ID:</p>
                                <p>Phone Number:</p>
                                <p>Email:</p>
                                </div>
                            <div className="w-4/5 ml-2">
                                <p>Nguyen Thien Loc</p>
                                <p>2252460</p>
                                <p>0933366454</p>
                                <p>deptrai@gmail.com</p>
                            </div>
                        </div>
                        {/* <div className="flex justify-end mt-5">   
                            <button className="border-2 border-[#7077A1] px-4 py-1 text-xl text-[#2D3250] bg-transparent hover:bg-[#7077A1]">
                                Save
                            </button>
                        </div> */}
                    </div>
               </>;
      case "Order items":
        return <div>Your order details here.</div>;
      case "Notification":
        return <div>Your notifications here.</div>;
      case "Books":
        return <div> sach cua m ne thang lz.</div>;
      case "Password":
        return <>
                <div>
                <div className="text-[#424769]">
                    <h2 className="text-2xl font-bold">Password</h2>
                    <div className="container flex mt-4 mb-4">
                    {/* Left side - Labels */}
                        <div className="w-1/5 text-right font-bold">
                            <p className="mt-2">Old password:</p>
                            <p className="mt-9">New password:</p>
                            <p className="mt-9">Verify password:</p>
                        </div>

                    {/* Right side - Inputs */}
                        <div className="w-4/5 ml-5">
                            <input
                                type="password"
                                placeholder="Enter your old password"
                                className="w-full p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg"
                            />
                            <input  
                                type="password"
                                placeholder="Enter your new password"
                                className="w-full p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg"
                            />
                            <input
                                type="password"
                                placeholder="Verify your new password"
                                className="w-full p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-5">   
                            <button className="border-2 border-[#7077A1] px-4 py-1 text-xl text-[#2D3250] hover:bg-[#7077A1] hover:text-white">
                                Save
                            </button>
                        </div>
                </div>
                </div>
               </>;
      default:
        return <div>Select an option from the list.</div>;
    }
  };

  return (
    <>
      <LHeader />
      <h1 className="text-center font-bold text-5xl mt-4 text-[#2D3250]"> INFORMATION PAGE</h1>
      <div className="mt-15 ml-20 mr-20 p-6 flex">
        {/* LEFT SIDE */}
        <div className="w-1/3 p-6">
          <ul className="text-right text-[#2D3250]">
            <li
              className="cursor-pointer mb-4 hover:text-[#F6B17A]"
              onClick={() => setSelectedOption("My Account")}
            >
              My Information
            </li>
            <li
              className="cursor-pointer mb-4 hover:text-[#F6B17A]"
              onClick={() => setSelectedOption("Order items")}
            >
              Order items
            </li>
            <li
              className="cursor-pointer mb-4 hover:text-[#F6B17A]"
              onClick={() => setSelectedOption("Notification")}
            >
              Notifications
            </li>
            <li
                className="cursor-pointer mb-4 hover:text-[#F6B17A]"
                onClick={() => setSelectedOption("Books")}
            >
                Your Books
            </li>
            <li
                className="cursor-pointer mb-4 hover:text-[#F6B17A]"
                onClick={() => setSelectedOption("Password")}
            >
                Change your Password
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE*/}
        <div className="w-2/3 p-6 bg-gray-300">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
