import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../context";

import Home from "../pages/Home";
import MyOrder from "../pages/MyOrder";
import MyOrders from "../pages/MyOrders";
import MyAccount from "../pages/MyAccount";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";

import Navbar from "../components/Navbar";
import CheckoutMenu from "../components/CheckoutMenu";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Home />} />
          <Route path="/electronics" element={<Home />} />
          <Route path="/furnitures" element={<Home />} />
          <Route path="/toys" element={<Home />} />
          <Route path="/others" element={<Home />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-orders/last" element={<MyOrder />} />
          <Route path="/my-orders/:id" element={<MyOrder />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navbar />
        <CheckoutMenu />
      </BrowserRouter>
    </CartProvider>
  );
}
