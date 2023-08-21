import { useContext } from "react";
import { CartContext } from "../../context";
import { NavLink } from "react-router-dom";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const context = useContext(CartContext);
  const activeStyle = "underline underline-offset-4 decoration-2";

  const routes = [
    { to: "/my-orders", text: "My Orders" },
    { to: "/my-account", text: "My Account" },
    { to: "/sign-in", text: "Sign In" },
  ];
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-semibold shadow-sm bg-white">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink to="/" className="font-semibold text-lg">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furnitures")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-4">
        <li className="text-black/60">rahp.dev@gmail.com</li>

        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.to}
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
        <li className="flex items-center">
          <ShoppingBagIcon className="w-5 h-5 antialiased mr-1 drop-shadow-xl" />
          <div className="bg-slate-800 text-white rounded-full px-2 py-0.5 shadow-xl">
            {context.cartProducts.length}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
