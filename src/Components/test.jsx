import React, { useState } from "react";
import AHeader from "./AHeader";
import Footer from "../Log/Footer";
import ReactPaginate from "react-paginate";
import NameBook from "../BookTittle";

const AProfile = () => {
  const [selectedOption, setSelectedOption] = useState("My Account"); // Default option
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = 4;

  // Function to render content based on selected option
  const renderContent = () => {
    switch (selectedOption) {
      case "My Account":
        return <>
        <div  className="text-[#424769]">
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
        return <>
        <div className="text-[#424769]">
          <h2 className="text-2xl font-bold">Your Order History</h2>
          <h3 className="text-[#424769]">Here are the details of the books you've purchased</h3>
          <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />
      
          {/* Order Table */}
          {/* CO THE SU DUNG MAP INDEX NHU NHUNG CAI KIA */}
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
                <tr>
                  <td className="px-4 py-2">#00001</td>
                  <td className="px-4 py-2">General Chemistry</td>
                  <td className="px-4 py-2">2024-11-18</td>
                  <td className="px-4 py-2">60.000</td>
                  <td className="px-4 py-2">Done</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">#00002</td>
                  <td className="px-4 py-2">Physical 1</td>
                  <td className="px-4 py-2">2024-11-17</td>
                  <td className="px-4 py-2">70.000</td>
                  <td className="px-4 py-2">None</td>
                </tr>
                {/* Add more rows here for other orders */}
              </tbody>
            </table>
          </div>
      
          <div className="mt-4 text-right font-bold text-xl">
            <p>Total Money Spent: 130.000</p>
          </div>
        </div>
      </>;
      case "Notification":
        return <>
        <h2 className="text-2xl font-bold text-[#424769]">Notifications</h2>
        <h3 className="text-[#424769]">Here are the details of the books your notifications</h3>
        <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />
        <p className="text-[#2D3250]"> You dont have any notifications.</p>
    </>;
      case "Books":
        const offset = currentPage * booksPerPage;
        const currentBooks = NameBook.slice(offset, offset + booksPerPage);
        return (
          <div className="text-[#424769]">
            <h2 className="text-2xl font-bold">Books in Your Library</h2>
            <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />
            {/* Danh sách sách */}
            <div className="grid grid-cols-2 gap-6">
              {currentBooks.map((book, index) => (
                <div key={index} className="p-4 bg-white shadow-md rounded-lg hover:ring-2 hover:ring-[#424769]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h3 className="text-lg font-bold mt-2">{book.title}</h3>
                  <p className="text-sm text-gray-600">Author: {book.author}</p>
                </div>
              ))}
            </div>

            {/* Phân trang */}
            <div className="flex justify-center mt-6">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={Math.ceil(NameBook.length / booksPerPage)}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                containerClassName={"flex space-x-2"}
                previousClassName={"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"}
                nextClassName={"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"}
                pageClassName={"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"}
                activeClassName={"bg-[#424769] text-white"}
              />
            </div>
          </div>
        );
      case "Password":
        // const [oldPassword, setOldPassword] = useState("");
        // const [newPassword, setNewPassword] = useState("");
        // const [verifyPassword, setVerifyPassword] = useState("");
        // const [error, setError] = useState("");

        // const handlePasswordChange = () => {
        // if (!oldPassword) {
        //     setError("Old password cannot be empty.");
        //     return;
        // }
        // if (newPassword !== verifyPassword) {
        //     setError("New password and verification do not match.");
        //     return;
        // }
        // setError("");
        // alert("Password updated successfully!");
        //         };
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
                    {/* <button
                        className="border-2 border-[#7077A1] px-4 py-1 text-xl text-[#2D3250] hover:bg-[#7077A1] hover:text-white"
                        onClick={handlePasswordChange}
                    >
                        Save
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>} */}
              </div>
              </div>
             </>;
      case "Author's Books":
        return <>
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
      </>;
      default:
        return <p className="text-[#2D3250] text-xl">Please select an option from the left.</p>;
    }
  };

  return (
    <>
      <AHeader />
      <h1 className="text-center font-bold text-5xl mt-4 text-[#2D3250]">INFORMATION PAGE</h1>
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
              onClick={() => setSelectedOption("Author's Books")}
            >
              Author's Books
            </li>
            <li
              className="cursor-pointer mb-4 hover:text-[#F6B17A]"
              onClick={() => setSelectedOption("Password")}
            >
              Change your Password
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/3 p-6 bg-gray-300">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AProfile;
