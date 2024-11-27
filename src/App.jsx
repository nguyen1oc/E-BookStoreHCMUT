import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Log/Header";
import Footer from "./Components/Log/Footer";
import Book from "./Components/Log/Book";
import Body from "./Components/Log/Body";
import LPage from "./Components/User/LPage";
import LHeader from "./Components/User/LHeader";
import LBook from "./Components/User/LBook";
import Profile from "./Components/User/Profile";
import BookSec from "./Components/User/BookSec";
import LoginButton from "./Components/Login/Login";
import LoginForm from "./Components/Login/LoginForm";
import PPage from "./Components/Publisher/PPage";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        {/* Ensure cart is passed to LHeader */}
        <Route path="/" element={<Body />} />
        <Route path="/books" element={<Book />} />
        <Route path="/select" element={<LoginButton/>} />
        <Route path="/loginform" element={<LoginForm/>} />

        {/*user*/}
        <Route path="/userdashboard" element={<LPage />} />
        <Route path="/lbooks" element={<LBook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booksec" element={<BookSec/>} />

        {/*publiser*/}
        <Route path="/publisherdashboard" element={<PPage />} />
        {/*author*/}
        
      </Routes>
    </Router>
  );
}


export default App;
