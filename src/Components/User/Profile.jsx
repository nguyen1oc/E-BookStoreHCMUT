import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import LHeader from "./LHeader";
import Footer from "../Log/Footer";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import NameBook from "../BookTittle";

const Profile = () => {
  const navigate = useNavigate(); // Dùng để chuyển hướng
  const [selectedOption, setSelectedOption] = useState("My Account"); // Default option
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = 4;
  const handleSubmitReport = () => {
    if (reportContent.trim() !== "") {
      const newReport = {
        id: reports.length + 1,
        content: reportContent,
        date: new Date().toLocaleString()
      };
      setReports([...reports, newReport]);
      setReportContent(""); // Reset the input field
    } else {
      alert("Please write a report before submitting.");
    }
  };
  return (
    <>

      {/* Y tuong la chia 2 bang, mot ben select cac lua chon de no hien ra
      Ma luc dau t k co thay doi cai /url nen ngoi sua cung met T^T */}
      <LHeader />
      <h1 className="text-center font-bold text-5xl mt-4 text-[#2D3250]">INFORMATION PAGE</h1>
      <div className="mt-15 ml-20 mr-20 p-6 flex">
        {/* LEFT SIDE */}
        <div className="w-1/3 p-6">
          <ul className="text-right text-[#2D3250]">
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/information">My Information</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/order-items">Order Items</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/notification">Notifications</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/books">Your Books</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/password">Change Password</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/report">Report</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/3 p-6 bg-gray-300">
          <Routes>
            <Route path="information" element={<Information />} />
            <Route path="order-items" element={<OrderItems />} />
            <Route path="notification" element={<Notification />} />
            <Route path="books" element={<Books />} />
            <Route path="password" element={<Password />} />
            <Route path="report" element={<Report/>} />
            <Route path="*" element={<p>Please select an option from the left.</p>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Report = () => {
  const [reportContent, setReportContent] = useState(""); 
  const [reports, setReports] = useState([]); 

  const handleSubmitReport = () => {
    if (reportContent.trim() !== "") {
      const newReport = {
        id: reports.length + 1,
        content: reportContent,
        date: new Date().toLocaleString()
      };
      setReports([...reports, newReport]);
      setReportContent("");
    } else {
      alert("Please write a report before submitting.");
    }
  };

  return (
    <>
      <div className="text-[#424769]">
        <h2 className="text-2xl font-bold">Submit a Report</h2>
        <hr className="border-t-2 border-grey-500 w-full mt-1 mb-1" />
        <p classname="text-[#424769] font-bold"> This part where you can send anything you want to the administrators</p>
        
        <div>
          <textarea
            value={reportContent}
            onChange={(e) => setReportContent(e.target.value)}
            placeholder="Write your report here..."
            className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#424769] mt-5 hover:ring-2 hover:ring-[#424769]"
          />
          <div className="flex justify-end">
            <button
              className="bg-[#2D3250] text-white py-2 px-6 rounded-lg hover:bg-[#7077A1] focus:outline-none"
              onClick={handleSubmitReport}
            >
              Submit Report
            </button>
          </div>
        </div>

        {/* Display submitted reports */}
        <div className="mt-6">
          <h3 className="text-xl font-bold">Your Submitted Reports</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-[#F6F6F6]">
                  <th className="px-4 py-2 text-left">Report ID</th>
                  <th className="px-4 py-2 text-left">Date Submitted</th>
                  <th className="px-4 py-2 text-left">Content</th>
                </tr>
              </thead>
              <tbody>
                {reports.length > 0 ? (
                  reports.map((report) => (
                    <tr key={report.id}>
                      <td className="px-4 py-2">#{report.id}</td>
                      <td className="px-4 py-2">{report.date}</td>
                      <td className="px-4 py-2">{report.content}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-4 py-2 text-center text-gray-500">
                      No reports submitted yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const Information = () => (
  <div className="text-[#424769]">
    <h2 className="font-bold">YOUR PROFILE</h2>
    <h3 className="text-[#424769]">Configure your information to secure the account</h3>
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
  </div>
);

const OrderItems = () => (
  <>
        <div className="text-[#424769]">
  <h2 className="text-2xl font-bold">Your Order History</h2>
  <h3 className="text-[#424769]">
    Here are the details of the books you've purchased
  </h3>
  <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />

  {/* Bảng hiển thị thông tin đơn hàng */}
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-[#F6F6F6]">
          <th className="px-4 py-2 text-left">Order ID</th>
          <th className="px-4 py-2 text-left">Book Title</th>
          <th className="px-4 py-2 text-left">Purchase Date</th>
          <th className="px-4 py-2 text-left">Price</th>
          <th className="px-4 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {NameBook.map((book, index) => (
          <tr key={book.Book_ID}>
            <td className="px-4 py-2">#{index + 1}</td>
            <td className="px-4 py-2">{book.title}</td>
            <td className="px-4 py-2">{book.Publish_date}</td>
            <td className="px-4 py-2">{book.price.toLocaleString()} VND</td>
            <td className="px-4 py-2">{book.conditions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Tính tổng tiền đã chi */}
  <div className="mt-4 text-right font-bold text-xl">
    <p>
      Total Money Spent:{" "}
      {NameBook.reduce((total, book) => total + book.price, 0).toLocaleString()}{" "}
      VND
    </p>
  </div>
</div>

      </>
);

const Notification = () => (
  <>
        <h2 className="text-2xl font-bold text-[#424769]">Notifications</h2>
        <h3 className="text-[#424769]">Here are the details of the books your notifications</h3>
        <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />
        <p className="text-[#2D3250]"> You dont have any notifications.</p>
    </>
);

const Books = () => (
  <>
    <div className="text-[#424769]">
    <h2 className="text-2xl font-bold">Books Purchased</h2>
    <h3 className="text-[#424769]">Here are the books you've purchased</h3>
    <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {NameBook.map((book) => (
        <div
          key={book.Book_ID}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:bg-gray-100"
        >
          <img
            src={book.image}
            alt={book.title}
            className="h-48 w-full object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-2">{book.title}</h3>
          <p className="text-[#2D3250]">Author: {book.author}</p>
          <p className="text-[#2D3250]">Price: {book.price.toLocaleString()} VND</p>
          <p className="text-[#2D3250]">Status: {book.conditions}</p>

          {/* Nút View Details */}
          <button
            className="mt-3 bg-[#7077A1] text-white px-4 py-2 rounded-md hover:bg-[#F6B17A]"
            onClick={() => handleViewDetails(book.Book_ID)}
          >
            Read
          </button>
        </div>
      ))}
    </div>
  </div>

         
  </>
);

const Password = () => (
  <>
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
                    {/* <button
                        className="border-2 border-[#7077A1] px-4 py-1 text-xl text-[#2D3250] hover:bg-[#7077A1] hover:text-white"
                        onClick={handlePasswordChange}
                    >
                        Save
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>} */}
              </div>
              </div>
             </>
);

export default Profile;
