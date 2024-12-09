import React from "react";
import LFooter from "../Login/LFooter";
import LHeader from "./LHeader";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function UserCart() {
  const navigate = useNavigate();
  const { cart, removeItem, setCart } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + Number(item.price), 0);
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
    removeItem(itemOrder); // Xóa sản phẩm theo order
  };

  const handlePurchase = async () => {
    console.log(cart);
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

    const user_id = localStorage.getItem("user_id");
    const discount_order = calculateTotalItems() > 5 ? 0.1 : 0;
    try {
      const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_ID: user_id}),
      });

      if(response.ok) {
        const order_data = await response.json();
        const order_id = order_data.order_id;

        const order_items = cart.map((item) => ({
          book_id: item.book_id,
          quantity: 1,
          discount: discount_order
        }));

        const orderItemResponse = await fetch("http://localhost:5000/order_item", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({order_id: order_id, items: order_items}),
        });

        if(orderItemResponse.ok) {
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
        }
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch(err) {
      console.error("Error submitting report:", err);
      alert("Error submitting report. Please try again.");
    }
  }

  return (
    <>
      <LHeader />
      <div className="flex justify-center items-start min-h-screen bg-gray-100 py-6">
        <div className="bg-white w-2/3 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-[#2D3250]">Cart</h2>

          {/* Hiển thị các sản phẩm trong giỏ */}
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4 p-4 border-b border-gray-300">
                <div className="flex items-center">
                  <img src={item.image_url} alt={item.title} className="w-16 h-20 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3250]">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.user_name}</p>
                  </div>
                </div>
                <div className="text-right mt-3">
                  <p className="text-lg font-semibold text-[#2D3250]">{Number(item.price).toLocaleString("en-US")} VND</p>
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
            <p className="text-center text-xl text-gray-700 mt-20">Your cart is empty.</p>
          )}

          <div className="flex justify-between items-center mt-6 font-semibold text-[#2D3250]">
            <span>Total Items:</span>
            <span>{calculateTotalItems()} items</span>
          </div>

          <div className="flex justify-between items-center mt-6 font-semibold text-[#2D3250]">
            <span>Before Discount:</span>
            <span>{Number(calculateTotalPrice()).toLocaleString("en-US")} VND</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span>Discount:</span>
            <span className="text-green-600">- {Number(calculateDiscount()).toLocaleString("en-US")} VND</span>
          </div>

          <div className="flex justify-between items-center mt-6 font-semibold text-[#2D3250]">
            <span>Total:</span>
            <span>{Number(calculateFinalTotal()).toLocaleString("en-US")} VND</span>
          </div>

          <div className="flex justify-center mt-8">
            <button onClick={handlePurchase} className="w-full bg-[#7077A1] text-white py-2 px-4 rounded hover:bg-[#F6B17A]">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
      <LFooter />
    </>
  );
}

export default UserCart;