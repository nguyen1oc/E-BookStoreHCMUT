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
import ABook from "./Components/Author/Abook";
import ABookSec from "./Components/Author/ABookSec";
import AProfile from "./Components/Author/AProfile";
import AuthorCart from "./Components/Author/AuthorCart";
import PBody from "./Components/Publisher/PubPage";
import { CartProvider } from "./Components/User/CartContext";
import LFooter from "./Components/Login/LFooter";


// Cac phan import co may cai bi du nhung ma t luoi qa nen k xoa

function App() {

  return (
    <Router>
      <CartProvider>
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
        <Route path="/profile/*" element={<Profile />} />
        

        {/*author*/}
        <Route path="/authordashboard" element={<PPage />} />
        <Route path="/abooks" element={<ABook />} />
        <Route path="/aprofile" element={<AProfile />} />
        <Route path="/abooksec" element={<ABookSec/>} />
        <Route path="/acart" element={<AuthorCart/>} /> 
        <Route path="/aprofile/*" element={<AProfile />} />

        {/*publisher*/}
        <Route path="/publisherdashboard" element={<PBody />} />

      </Routes>
      </CartProvider>
    </Router>
  );
}


export default App;
