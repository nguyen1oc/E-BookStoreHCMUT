import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Header from "./Header";
import Footer from "./Footer";
import ReactPaginate from "react-paginate";
import NameBook from "../BookTittle";
import LoginButton from "../Login/Login";

const Book = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const booksPerPage = 8; // Số sách hiển thị trên mỗi trang
  const offset = currentPage * booksPerPage; // Vị trí bắt đầu cho mỗi trang
  const currentBooks = NameBook.slice(offset, offset + booksPerPage); // Lấy danh sách sách hiện tại theo trang

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Header />
      {/*Thanh tim kiem */}
      <div className="container mx-auto p-4">
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

      {/*Thanh phan loai */}
      {/* You can change/update/delete this or modify for your convinience */}
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
        {/* Hiển thị các sách thuộc trang hiện tại */}
        {currentBooks.map((book, index) => (
          <Link to = "/select">
          <div
            key={index}
            className="w-64 m-4 bg-white shadow-xl rounded-lg overflow-hidden hover:ring-2 hover:ring-[#2D3250]"
          >
            <img
              src={book.image}
              alt="Book Cover"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600">Author: {book.author}</p>
              <p className="text-sm text-gray-600">Publisher: {book.publisher}</p>
              <p className="text-sm text-gray-600">Genre: {book.genre}</p>
              <p className="text-lg font-bold text-gray-800 mt-2">
                Price: {book.price}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
     
      {/* Khúc dưới này chủ yếu để làm cái mục chuyển trang và giới hạn books ở mỗi trang */}
  
      </div>
      <div className="flex justify-center bg-[#7077A1] p-3 flex mr-20 ml-20">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={Math.ceil(NameBook.length / booksPerPage)} // Tổng số trang
          onPageChange={handlePageChange} // Hàm chuyển trang
          containerClassName={
            "pagination flex space-x-2 text-[#2D3250] font-semibold"
          }
          activeClassName={"text-[#2D3250] px-4 py-2 rounded bg-[#F6B17A] "}
          pageClassName={"bg-[#424769] text-white py-2 px-4 rounded hover:bg-[#2D3250]"}
          previousClassName={"bg-[#424769] text-white py-2 px-4 rounded hover:bg-[#2D3250]"}
          nextClassName={"bg-[#424769] text-white py-2 px-4 rounded hover:bg-[#2D3250]"}
        />
      </div>

      <Footer />
    </>
  );
};

export default Book;
