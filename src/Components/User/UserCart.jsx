import React, { useState, useEffect } from "react";
import LFooter from "../Login/LFooter";
import LHeader from "./LHeader";
import NameBook from "../BookTittle";
import { useNavigate } from "react-router-dom";

function UserCart() {
  const [cartItems, setCartItems] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if(savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if(cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  }

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotalItems = () => {
    return cartItems.length;
  };

  // Calculate discount: if more than 5 items, apply a 10% discount
  const calculateDiscount = () => {
    const totalItems = calculateTotalItems();
    return totalItems > 5 ? calculateTotalPrice() * 0.1 : 0; 
  };

  // Calculate final total after discount
  const calculateFinalTotal = () => {
    return calculateTotalPrice() - calculateDiscount();
  };

  const handlePurchase = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
      console.log("User is not logged in.");
      return;
    }

    const actual_price = calculateFinalTotal();

    const response = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        actual_price,
        user_id,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      console.log("Purchase successful:", data.message);
      navigate("/lbooks"); // Navigate to the success or next page
    } else {
      console.log("Error during purchase:", data.error);
    }
  };

  return (
    <>
      <LHeader />
      <div className="flex justify-center items-start min-h-screen bg-gray-100 py-6">
        <div className="bg-white w-2/3 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-[#2D3250]">Cart</h2>

          {/* Display cart items */}
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
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500 mt-2 hover:underline">
                    Remove
                  </button>
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
            <button
              onClick={handlePurchase} 
              className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A]"
            >
              Purchase
            </button>
          </div>
          
          <div className = "flex justify-center mt-4">
            <button
              onClick={handleClearCart}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Clear Cart
              </button>
          </div>
        </div>
      </div>
      <LFooter />
    </>
  );
}

export default UserCart;
