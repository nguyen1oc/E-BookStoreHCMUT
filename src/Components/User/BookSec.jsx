import { useLocation } from "react-router-dom";
import LHeader from "./LHeader";
import LFooter from "../Login/LFooter";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./CartContext";

const BookSec = () => {
  const location = useLocation();
  const { book } = location.state || {};  
  const { addCart } = useCart(); 
  const { addToCart } = useCart();
  //const [cart, setCart] = useState([]);
  const [reviewContent, setReviewContent] = useState("");
  const [stars, setStars] = useState(1);
  const [userReview, setUserReview] = useState(book?.review || []);

  // Them sach vao gio hang chu yeu thong bao cho dep
  const handleAddToCart = () => {
    //setCart([...cart, book]);
    if (!book) return;
    addToCart(book);
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

  // Khi them mot cai ri viu moi vao
  const handleReviewSubmit = () => {
    if (reviewContent.trim() === "") {
      toast.error("Please write a review before submitting!");
      return;
    }

    const newReview = {
      reviewID: userReview.length + 1,
      reviewDate: new Date().toLocaleDateString(),
      stars: stars,
      content: reviewContent,
    };

    setUserReview([...userReview, newReview]);
    setReviewContent(""); 
    toast.success("Your review has been submitted!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  if (!book) {
    return <p className="text-center text-xl text-gray-700 mt-20">Book not found!</p>;
  }

  return (
    <>
      <LHeader />
        
      <div className="  container bg-white p-8 rounded-lg w-3/4 mx-auto mt-10 mb-10">
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
        <div className="w-3/5 bg-gray-200 p-6 rounded-lg mt-10">
          <h2 className="text-5xl font-bold text-[#2D3250]">{book.title}</h2>
          <p className="text-xl text-#7077A1 mt-5">Book ID: {book.Book_ID}</p>
          <p className="text-xl text-#7077A1 mt-5">Author: {book.author}</p>
          <p className="text-xl text-#7077A1 mt-5">Publisher: {book.publisher}</p>
          <p className="text-xl text-#7077A1 mt-5">Genre: {book.genre}</p>
          <p className="text-xl text-#7077A1 mt-5">Publish Date: {book.Publish_date}</p>
          <p className="text-xl text-#7077A1 mt-5">Price: {book.price.toLocaleString()} VND</p>
          <p className="text-xl text-#7077A1 mt-5">Conditions: {book.conditions}</p>

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
      </div>

      {/* Review Section */}
      <div className="container bg-gray-200 p-8 rounded-lg w-3/4 mx-auto mt-10 mb-10">
        <h2 className="text-3xl font-bold text-left mb-5">Reviews:</h2>
        {userReview && userReview.length > 0 ? (
          userReview.map((review, index) => (
            <div key={review.reviewID || index} className="border-b border-gray-300 pb-4 mb-4">
              <div className="text-lg text-gray-700">
                <p className="font-semibold">Review ID: {review.reviewID}</p>
                <p>Review Date: {review.reviewDate}</p>
                <p>Stars: {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}</p>
              </div>
              <div className="text-xl text-gray-700 mt-2">
                <p>{review.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700 text-lg">No reviews available for this book.</p>
        )}
      </div>

      {/* Review Form */}
      <div className="container bg-gray-200 p-8 rounded-lg w-3/4 mx-auto mt-10 mb-10">
        <h2 className="text-3xl font-bold text-left mb-5 text-[#2D3250]">Write a Review:</h2>
        <textarea
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          placeholder="Write your review here..."
          rows="4"
          className="w-full p-4 bg-white border border-gray-300 rounded-lg mb-5"
        ></textarea>

        {/* Rating Stars */}
        <div className="mb-5">
          <p className="font-semibold">Stars: </p>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-${stars >= star ? "yellow" : "gray"}-400`}
                onClick={() => setStars(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleReviewSubmit}
          className="bg-[#2D3250] text-white py-2 px-6 rounded-lg hover:bg-[#7077A1] focus:outline-none"
        >
          Submit Review
        </button>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />

      <LFooter />
    </>
  );
};

export default BookSec;