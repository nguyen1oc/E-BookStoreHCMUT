import React, { useState } from "react";
import LFooter from "../Login/LFooter";
import LHeader from "./LHeader";
import NameBook from "../BookTittle";
import { Link } from "react-router-dom";

function UserCart() {
  const [cartItems, setCartItems] = useState(NameBook); 

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotalItems = () => {
    return cartItems.length;
  };

  // Tính giá trị giảm giá nếu số lượng sản phẩm nhiều hơn 5
  const calculateDiscount = () => {
    const totalItems = calculateTotalItems();
    const totalPrice = calculateTotalPrice();
    return totalItems > 5 ? totalPrice * 0.1 : 0; 
  };

  // Tính tổng giá trị sau khi áp dụng giảm giá
  const calculateFinalTotal = () => {
    return calculateTotalPrice() - calculateDiscount();
  };

  return (
    <>
      <LHeader />
      <div className="flex justify-center items-start min-h-screen bg-gray-100 py-6">
        <div className="bg-white w-2/3 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-[#2D3250]">Cart</h2>

          {/* Hiển thị các sản phẩm trong giỏ */}
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4 p-4 border-b border-gray-300">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-20 object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-[#2D3250]">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.author}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-[#2D3250]">{item.price.toLocaleString()} VND</p>
              </div>
            </div>
          ))}

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
            <span className="text-green-600">- {calculateDiscount().toLocaleString()} VND</span>
          </div>

          <div className="flex justify-between items-center mt-6 font-semibold text-[#2D3250]">
            <span>Total:</span>
            <span>{calculateFinalTotal().toLocaleString()} VND</span>
          </div>

          <div className="flex justify-center mt-8">
            <button className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A]">
              <Link to="/userdashboard">Purchase</Link>
            </button>
          </div>
        </div>
      </div>
      <LFooter />
    </>
  );
}

export default UserCart;
