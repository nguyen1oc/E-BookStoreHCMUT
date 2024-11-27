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
import PPage from "./Components/Author/PPage";
import UserCart from "./Components/User/UserCart";
import Signup from "./Components/Login/SignUp";
import Forget from "./Components/Login/Forget";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        {/*Page*/}
        <Route path="/" element={<Body />} />
        <Route path="/books" element={<Book />} />

        {/*LoginPart*/}
        <Route path="/select" element={<LoginButton/>} />
        <Route path="/loginform" element={<LoginForm/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forget" element={<Forget/>} />

        {/*user*/}
        <Route path="/userdashboard" element={<LPage />} />
        <Route path="/lbooks" element={<LBook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booksec" element={<BookSec/>} />
        <Route path="/cart" element={<UserCart/>} />
        {/*publiser*/}
        <Route path="/publisherdashboard" element={<PPage />} />
        {/*author*/}
        
      </Routes>
    </Router>
  );
}


export default App;
