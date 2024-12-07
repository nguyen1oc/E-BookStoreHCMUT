import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import AHeader from "./AHeader";
import Footer from "../Log/Footer";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import NameBook from "../BookTittle";

const AProfile = () => {
  const navigate = useNavigate(); // Dùng để chuyển hướng
  const [selectedOption, setSelectedOption] = useState("My Account"); // Default option
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = 4;
  return (
    <>
      <AHeader />
      <h1 className="text-center font-bold text-5xl mt-4 text-[#2D3250]">INFORMATION PAGE</h1>
      <div className="mt-15 ml-20 mr-20 p-6 flex">
        {/* LEFT SIDE */}
        <div className="w-1/3 p-6">
          <ul className="text-right text-[#2D3250]">
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/aprofile/ainformation">My Information</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/aprofile/aorder-items">Order Items</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/aprofile/anotification">Notifications</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/aprofile/abooks">Your Books</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
            <Link to="/aprofile/authorbooks">Author's Books</Link>
            </li>  
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/aprofile/apassword">Change Password</Link>
            </li>
            
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/3 p-6 bg-gray-300">
          <Routes>
            <Route path="ainformation" element={<AInformation />} />
            <Route path="aorder-items" element={<AOrderItems />} />
            <Route path="anotification" element={<ANotification />} />
            <Route path="abooks" element={<ABooks />} />
            <Route path="apassword" element={<APassword />} />
            <Route path="authorbooks" element={<AuthorBooks />} />
            <Route path="*" element={<p>Please select an option from the left.</p>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};
const AuthorBooks = () => (
  <>
        <div className="text-[#424769]">
      <h2 className="text-2xl font-bold mb-4">Author's Books</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-[#F6F6F6]">
              <th className="px-4 py-2 text-left">Book ID</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Publish Date</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Condition</th>
              <th className="px-4 py-2 text-left">Reviews</th>
            </tr>
          </thead>
          <tbody>
            {NameBook.map((book) => (
              <tr key={book.Book_ID}>
                <td className="border px-4 py-2">{book.Book_ID}</td>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">{book.Publish_date}</td>
                <td className="border px-4 py-2">{book.price.toLocaleString()} VND</td>
                <td className="border px-4 py-2">{book.conditions}</td>
                <td className="border px-4 py-2">
                  {book.review.length > 0 ? (
                    <ul>
                      {book.review.map((r) => (
                        <li key={r.reviewID}>
                          ⭐ {r.stars} - "{r.content}" <small>({r.reviewDate})</small>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "No reviews"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            </>
);

const AInformation = () => (
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
        <p>Nguyen Thien Nam</p>
        <p>2252460</p>
        <p>0933366454</p>
        <p>deptrai@gmail.com</p>
      </div>
    </div>
  </div>
);

const AOrderItems = () => (
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

const ANotification = () => (
  <>
        <h2 className="text-2xl font-bold text-[#424769]">Notifications</h2>
        <h3 className="text-[#424769]">Here are the details of the books your notifications</h3>
        <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />
        <p className="text-[#2D3250]"> You dont have any notifications.</p>
    </>
);

const ABooks = () => (
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

const APassword = () => (
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

export default AProfile;
