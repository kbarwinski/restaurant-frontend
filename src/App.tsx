import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/home/home";
import ContactPage from "./pages/contact/contact";
import AboutPage from "./pages/about/about";
import MenuPage from "./pages/menu/menu";
import CartPage from "./pages/cart/cart";
import ReservationsPage from "./pages/reservations/reservations";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ContactSection from "./components/contact/contactsection/contactsection";
import { Provider } from "react-redux";
import { store } from "./store/store";
import OrdersCrudPage from "./pages/crud/orders-crud";
import { useAppSelector } from "./store/hooks";
import axios from "axios";

function App() {
  const AuthProvider = () => {
    const auth = useAppSelector((state) => state.auth);
    let token = auth.token;

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }
    return null;
  };

  return (
    <div className="App">
      <Provider store={store}>
        <AuthProvider />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/crud/orders" element={<OrdersCrudPage />} />
          </Routes>
          <ContactSection />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
