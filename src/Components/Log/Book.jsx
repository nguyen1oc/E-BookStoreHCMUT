import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Header from "./Header";
import Footer from "./Footer";
import LoginButton from "./Login"; 

const Book = () => {
  const [showPopup, setShowPopup] = useState(false); // State for managing popup visibility

  const togglePopup = () => {
    setShowPopup(!showPopup); // Toggle visibility of the login popup
  };
  return (
    <>
      <Header />
      {/*Thanh tim kiem */}
      <div className="container mx-auto p-4">
        {/* Thanh tìm kiếm */}
        <div className="flex justify-center mb-6 mt-6">
          <div className="relative w-3/5">
            <input
              type="text"
              className="w-full py-2 pl-5 pr-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2D3250] hover:ring-2 hover:ring-[#7077A1] "
              placeholder="What do you want to read?"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-[#2D3250] px-4 py-2 rounded-lg focus:outline-none hover:bg-[#7077A1]"
            >
              <IoSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#7077A1] p-2 flex items-center justify-center mr-20 ml-20">
        <div className="flex space-x-4 hidden xl:flex">
          <p className = "px-4 py-2 text-bold text-white text-xl">ARRANGE BY:</p>
          <button className="bg-[#424769] text-white py-2 px-4 rounded hover:bg-[#2D3250]">
              Update
          </button>
          <button className="bg-[#424769] text-white py-2 px-4 rounded hover:bg-[#2D3250]">
              Popular
          </button>
          <button className="bg-[#424769] text-white py-2 px-4 rounded hover:bg-[#2D3250]">
              Genre
          </button>
          <button className="bg-[#424769] text-white py-2 px-4 rounded hover:bg-[#2D3250]">
              Price
          </button>
        </div>
      </div>

      
      <div>
        <div className="ml-20 mr-20 bg-[#f3f4f6] p-6 flex flex-wrap justify-center">
        {/* Block chứa sách */}
          <div className="w-64 m-4 bg-white shadow-xl rounded-lg overflow-hidden hover:ring-2 hover:ring-[#2D3250]" onClick={togglePopup}>
            <img src="https://cdn0.fahasa.com/media/flashmagazine/images/page_images/atomic_habits/2021_10_25_16_04_02_1-390x510.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Atomic Habits</h3>
              <p className="text-sm text-gray-600">Author: James Clear</p>
              <p className="test-sm text-gray-600">Publisher: Penguin Random House</p>
              <p className="test-sm text-gray-600">Genre: Self-Help, Personal Development</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
            </div>
          </div>

          <div className="w-64 m-4 bg-white shadow-xl hover:ring-2 hover:ring-[#2D3250] rounded-lg overflow-hidden" onClick={togglePopup}>
            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Life of Pi</h3>
              <p className="text-sm text-gray-600">Author: Yann Martel</p>
              <p className="test-sm text-gray-600">Publisher: Knopf Canada</p>
              <p className="test-sm text-gray-600">Adventure Fiction, Philosophical Fiction</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 80.000 VNĐ</p>
            </div>
          </div>

          <div className="w-64 m-4 bg-white shadow-xl hover:ring-2 hover:ring-[#2D3250] rounded-lg overflow-hidden" onClick={togglePopup}>
            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691147319i/11273677.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Mắt biếc</h3>
              <p className="text-sm text-gray-600">Author: Nguyễn Nhật Ánh</p>
              <p className="test-sm text-gray-600">Publisher: Nhà Xuất Bản Trẻ</p>
              <p className="test-sm text-gray-600">Genre: Romance, Coming-of-Age</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 80.000 VNĐ</p>
            </div>
          </div>

          <div className="w-64 m-4 bg-white shadow-xl hover:ring-2 hover:ring-[#2D3250] rounded-lg overflow-hidden" onClick={togglePopup}>
            <img src="https://www.nxbtre.com.vn/Images/Book/nxbtre_full_17392020_053912.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Ngày Xưa Có Một Chuyện Tình</h3>
              <p className="text-sm text-gray-600">Author: Nguyễn Nhật Ánh</p>
              <p className="test-sm text-gray-600">Publisher: Nhà Xuất Bản Trẻ</p>
              <p className="test-sm text-gray-600">Genre: Romance, Drama</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 80.000 VNĐ</p>
            </div>
          </div>

          {/* COPY PASTE */}
          <div className="w-64 m-4 bg-white shadow-xl hover:ring-2 hover:ring-[#2D3250] rounded-lg overflow-hidden" onClick={togglePopup}>
            <img src="https://cdn0.fahasa.com/media/flashmagazine/images/page_images/atomic_habits/2021_10_25_16_04_02_1-390x510.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Atomic Habits</h3>
              <p className="text-sm text-gray-600">Author: James Clear</p>
              <p className="test-sm text-gray-600">Publisher: Penguin Random House</p>
              <p className="test-sm text-gray-600">Genre: Self-Help, Personal Development</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
            </div>
          </div>

          <div className="w-64 m-4 bg-white shadow-xl hover:ring-2 hover:ring-[#2D3250] rounded-lg overflow-hidden" onClick={togglePopup}>
            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Life of Pi</h3>
              <p className="text-sm text-gray-600">Author: Yann Martel</p>
              <p className="test-sm text-gray-600">Publisher: Knopf Canada</p>
              <p className="test-sm text-gray-600">Adventure Fiction, Philosophical Fiction</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 80.000 VNĐ</p>
            </div>
          </div>

          <div className="w-64 m-4 bg-white shadow-xl hover:ring-2 hover:ring-[#2D3250] rounded-lg overflow-hidden" onClick={togglePopup}>
            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691147319i/11273677.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Mắt biếc</h3>
              <p className="text-sm text-gray-600">Author: Nguyễn Nhật Ánh</p>
              <p className="test-sm text-gray-600">Publisher: Nhà Xuất Bản Trẻ</p>
              <p className="test-sm text-gray-600">Genre: Romance, Coming-of-Age</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 80.000 VNĐ</p>
            </div>
          </div>

          <div className="w-64 m-4 bg-white shadow-xl hover:ring-2 hover:ring-[#2D3250] rounded-lg overflow-hidden" onClick={togglePopup}>
            <img src="https://www.nxbtre.com.vn/Images/Book/nxbtre_full_17392020_053912.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Ngày Xưa Có Một Chuyện Tình</h3>
              <p className="text-sm text-gray-600">Author: Nguyễn Nhật Ánh</p>
              <p className="test-sm text-gray-600">Publisher: Nhà Xuất Bản Trẻ</p>
              <p className="test-sm text-gray-600">Genre: Romance, Drama</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 80.000 VNĐ</p>
            </div>
          </div>
          {/*END */}

        </div>
      </div>
      <div className="bg-[#7077A1] p-3 flex mr-20 ml-20">
        Loc dep trai
        
      </div>
      {showPopup && <LoginButton togglePopup={togglePopup} />}
      <Footer />
    </>
  );
};

export default Book;
