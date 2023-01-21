import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/home/home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/menu" element={<HomePage />}/>
          <Route path="/reservations" element={<HomePage />}/>
          <Route path="/about" element={<HomePage />}/>
          <Route path="/contact" element={<HomePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
