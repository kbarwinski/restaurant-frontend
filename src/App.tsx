import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/home/home";
import ContactPage from "./pages/contact/contact";
import AboutPage from "./pages/about/about";
import MenuPage from "./pages/menu/menu";
import ReservationsPage from "./pages/reservations/reservations";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactSection from "./components/contactsection/contactsection";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/menu" element={<MenuPage />}/>
          <Route path="/reservations" element={<ReservationsPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </Router>
      <ContactSection/>
    </div>
  );
}

export default App;
