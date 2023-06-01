import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/home/home";
import ContactPage from "./pages/contact/contact";
import AboutPage from "./pages/about/about";
import MenuPage from "./pages/menu/menu";
import CartPage from "./pages/cart/cart";
import ReservationsPage from "./pages/reservations/reservations";
import { createTheme } from "@mui/material/styles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactSection from "./components/contact/contactsection/contactsection";
import { Provider } from "react-redux";
import { store } from "./store/store";
import OrderCrudPage from "./pages/order/order-crud";
import { useAppSelector } from "./store/hooks";
import axios from "axios";
import { ThemeOptions, ThemeProvider, CssBaseline } from "@mui/material";
import OrderStatusPage from "./pages/order/order-status";

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

   const themeOptions: ThemeOptions = {
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff8f00',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#3e2723',
        paper: '#731010',
      },
    },
    typography: {
      fontFamily: 'monospace',
    },
    shape: {
      borderRadius: 16,
    },
  };
  const theme = createTheme(themeOptions);

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AuthProvider />
          <CssBaseline />
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/crud/orders" element={<OrderCrudPage />} />
              <Route path="/order/:id" element={<OrderStatusPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
