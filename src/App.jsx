import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Log/Header";
import Footer from "./Components/Log/Footer";
import Book from "./Components/Log/Book";
import Body from "./Components/Log/Body";
import LPage from "./Components/AlreadyLog/LPage";
import LHeader from "./Components/AlreadyLog/LHeader";
import LBook from "./Components/AlreadyLog/LBook";
import Profile from "./Components/AlreadyLog/Profile";

function App() {
  return (
    <Router>
      <Routes>
         {/* Home Route */}
         <Route path="/" element={<Body/>} />
        {/* Only the Books Route */}
        <Route path="/books" element={<Book />} />
        <Route path="/loginpage" element={<LPage/>} />
        <Route path="/lbooks" element={<LBook/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;