import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Book from "./Components/Book";
import Body from "./Components/Body";

function App() {
  return (
    <Router>
      <Routes>
         {/* Home Route */}
         <Route path="/" element={<Body/>} />
        {/* Only the Books Route */}
        <Route path="/books" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;