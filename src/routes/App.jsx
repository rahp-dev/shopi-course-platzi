import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MyOrder from "../pages/MyOrder";
import MyOrders from "../pages/MyOrders";
import MyAccount from "../pages/MyAccount";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}
