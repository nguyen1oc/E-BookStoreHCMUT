import { useLocation } from "react-router-dom";
import LHeader from "./LHeader";
import LFooter from "./LFooter";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const BookSec = () => {
  const location = useLocation();
  const { book } = location.state || {};  

  const [cart, setCart] = useState([]);

  // Hàm thêm sách vào giỏ hàng
  const handleAddToCart = () => {
    setCart([...cart, book]);
    toast.success(`${book.title} has been added to your cart!`, {
      position: "bottom-right", 
      autoClose: 4000, 
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true, 
      progress: undefined, 
    });
  };

  return (
    <>
      <LHeader />
        <>
        <div className="container flex lg:flex-nowrap items-center">
        {/* Hình ảnh sách */}
        <div className="w-4/5 flex justify-center items-center mb-0 mt-20">
          <img
            src={book.image}
            alt="Book Cover"
            className="rounded-lg shadow-lg w-64 h-80 object-cover"
          />
        </div>

        {/* Thông tin sách */}
        <div className="w-3/5 bg-gray-300 p-6 rounded-lg mr-20">
          <h2 className="text-5xl font-bold text-[#2D3250]">{book.title}</h2>
          <p className="text-xl text-gray-700 mt-5">Author: {book.author}</p>
          <p className="text-xl text-gray-700 mt-5">Publisher: {book.publisher}</p>
          <p className="text-xl text-gray-700 mt-5">Genre: {book.genre}</p>
          <p className="text-xl text-gray-700 mt-5">Price: {book.price}</p>

          {/* Nút Add to Cart */}
          <div className="mt-5">
            <button
              onClick={handleAddToCart}
              className="bg-[#2D3250] text-white py-2 px-6 rounded-lg hover:bg-[#7077A1] focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
  <h2 className="flex text-3xl font-bold text-right mt-10 ml-20"> Review:</h2>
  <div className="container bg-gray-200 p-8 rounded-lg w-3/4 ml-20 mr-10">
    {/* Các đánh giá sách */}
    {book.review && book.review.map((review, index) => (
        <div key={index} className="text-lg text-xl text-gray-700 mt-2">
            <p>{review}</p>
        </div>
    ))}
  </div>
</div>

      {/* Container chứa thông báo */}
      <ToastContainer />
        </>
      <LFooter/>
    </>
  );
};

export default BookSec;
