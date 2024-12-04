import React, { createContext, useContext, useState } from 'react';

// Create context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (book) => {
    const newItem = { ...book, order: cart.length + 1 }; // Gán thứ tự cho sản phẩm
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeItem = (itemOrder) => {
    setCart((prevCart) => prevCart.filter(item => item.order !== itemOrder));
  };


  const totalItems = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
