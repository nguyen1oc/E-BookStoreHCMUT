import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Header from "./Header";
import Footer from "./Footer";

const Book = () => {

  return (
    <>
      <Header />
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
        <div className="flex space-x-4">
          <p className = "px-4 py-2 text-bold text-white text-xl"> Sap xep theo</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Mới Cập Nhật
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Phổ Biến
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Genre
          </button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              Price
          </button>
        </div>
      </div>
      <div>
        <div className="ml-20 mr-20 bg-[#f3f4f6] p-6 flex flex-wrap justify-center">
        {/* Block chứa sách */}
          <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="path-to-book-cover.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Tên Sách</h3>
              <p className="text-sm text-gray-600">Tác Giả: Tên Tác Giả</p>
              <p className="test-sm text-gray-600">Thể loại: Trinh thám</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Thêm vào Giỏ Hàng
              </button>
            </div>
          </div>

        {/* Thêm các block sách khác theo nhu cầu */}
        <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="path-to-book-cover.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Tên Sách</h3>
              <p className="text-sm text-gray-600">Tác Giả: Tên Tác Giả</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Thêm vào Giỏ Hàng
             </button>
            </div>
          </div> 
          <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="path-to-book-cover.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Tên Sách</h3>
              <p className="text-sm text-gray-600">Tác Giả: Tên Tác Giả</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Thêm vào Giỏ Hàng
             </button>
            </div>
          </div> 
          <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="path-to-book-cover.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Tên Sách</h3>
              <p className="text-sm text-gray-600">Tác Giả: Tên Tác Giả</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Thêm vào Giỏ Hàng
             </button>
            </div>
          </div> 
          <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="path-to-book-cover.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Tên Sách</h3>
              <p className="text-sm text-gray-600">Tác Giả: Tên Tác Giả</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Thêm vào Giỏ Hàng
             </button>
            </div>
          </div> 
          <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="path-to-book-cover.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Tên Sách</h3>
              <p className="text-sm text-gray-600">Tác Giả: Tên Tác Giả</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Thêm vào Giỏ Hàng
             </button>
            </div>
          </div> 
          <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="path-to-book-cover.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Tên Sách</h3>
              <p className="text-sm text-gray-600">Tác Giả: Tên Tác Giả</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Thêm vào Giỏ Hàng
             </button>
            </div>
          </div> 
          <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="path-to-book-cover.jpg" alt="Book Cover" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Tên Sách</h3>
              <p className="text-sm text-gray-600">Tác Giả: Tên Tác Giả</p>
              <p className="text-lg font-bold text-gray-800 mt-2">Giá: 100.000 VNĐ</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Thêm vào Giỏ Hàng
             </button>
            </div>
          </div> 
        </div>
      </div>
      <div className="bg-[#7077A1] p-3 flex mr-20 ml-20">
        Loc dep trai
        
      </div>
      <Footer />
    </>
  );
};

export default Book;
