import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Log/Header";
import Footer from "./Components/Log/Footer";
import Book from "./Components/Log/Book";
import Body from "./Components/Log/Body";
import LPage from "./Components/AlreadyLog/LPage";
import LHeader from "./Components/AlreadyLog/LHeader";
import LBook from "./Components/AlreadyLog/LBook";
import Profile from "./Components/AlreadyLog/Profile";
import BookSec from "./Components/AlreadyLog/BookSec";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        {/* Ensure cart is passed to LHeader */}
        <Route path="/" element={<Body />} />
        <Route path="/books" element={<Book />} />
        <Route path="/loginpage" element={<LPage />} />
        <Route path="/lbooks" element={<LBook />} />
        <Route path="/profile" element={<Profile />} />
        <Route 
          path="/booksec" 
          element={<BookSec cart={cart} setCart={setCart} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
