import React from "react";
import LFooter from "../Login/LFooter";
import LHeader from "./LHeader";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useCart } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserCart() {
  const { cart, removeItem, setCart } = useCart(); // Lấy setCart từ context
  const navigate = useNavigate(); 

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotalItems = () => {
    return cart.length;
  };

  const calculateDiscount = () => {
    const totalItems = calculateTotalItems();
    const totalPrice = calculateTotalPrice();
    return totalItems > 5 ? totalPrice * 0.1 : 0;
  };

  const calculateFinalTotal = () => {
    return calculateTotalPrice() - calculateDiscount();
  };

  const handleRemoveItem = (itemOrder) => {
    removeItem(itemOrder);
  };

  // Xử lý khi bấm nút Purchase
  const handlePurchase = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!", {
        position: "bottom-right",
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true, 
        draggable: true, 
        progress: undefined, 
      });
      return;
    }

    toast.success("Purchase successful!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => {
      setCart([]);
      navigate("/userdashboard"); 
    }, 3000);
  };

  return (
    <>
      <LHeader />
      <div className="flex justify-center items-start min-h-screen bg-gray-100 py-6">
        <div className="bg-white w-2/3 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-[#2D3250]">Cart</h2>

          {/* Hiển thị các sản phẩm trong giỏ */}
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4 p-4 border-b border-gray-300"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-20 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3250]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.author}</p>
                  </div>
                </div>
                <div className="text-right mt-3">
                  <p className="text-lg font-semibold text-[#2D3250]">
                    {item.price.toLocaleString()} VND
                  </p>
                  <button
                    className="text-red-500 text-sm hover:text-red-700"
                    onClick={() => handleRemoveItem(item.order)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-700 mt-20">
              Your cart is empty.
            </p>
          )}

          <div className="flex justify-between items-center mt-6 font-semibold text-[#2D3250]">
            <span>Total Items:</span>
            <span>{calculateTotalItems()} items</span>
          </div>

          <div className="flex justify-between items-center mt-6 font-semibold text-[#2D3250]">
            <span>Before Discount:</span>
            <span>{calculateTotalPrice().toLocaleString()} VND</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span>Discount:</span>
            <span className="text-green-600">
              - {calculateDiscount().toLocaleString()} VND
            </span>
          </div>

          <div className="flex justify-between items-center mt-6 font-semibold text-[#2D3250]">
            <span>Total:</span>
            <span>{calculateFinalTotal().toLocaleString()} VND</span>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A]"
              onClick={handlePurchase} // Gọi hàm handlePurchase khi bấm nút
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <LFooter />
    </>
  );
}

export default UserCart;
