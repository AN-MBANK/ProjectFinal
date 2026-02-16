import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Orders from "./pages/Orders";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Payment from "./pages/Payment";
import OrderDetail from "./pages/OrderDetail";
import "./styles/variables.css";
import "./styles/layout.css";
import "./styles/button.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#D4AF37",
            border: "1px solid #D4AF37",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/payment" element={<Payment />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
