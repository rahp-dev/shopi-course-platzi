import { useContext } from "react";
import { CartContext } from "../../context";
import { NavLink } from "react-router-dom";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const context = useContext(CartContext);

  const activeStyle = "underline underline-offset-4 decoration-2";

  const categories = [
    { to: "/", text: "Home" },
    { to: "/all", text: "All" },
    { to: "/clothes", text: "Clothes" },
    { to: "/furniture", text: "Furniture" },
    { to: "/toys", text: "Toys" },
  ];

  const routes = [
    { to: "/my-orders", text: "My Orders" },
    { to: "/my-account", text: "My Account" },
    { to: "/sign-in", text: "Sign In" },
  ];
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-semibold shadow-sm bg-white">
      <ul className="flex items-center gap-4">
        {categories.map((category, index) => (
          <li key={index} className="first:font-semibold first:text-lg">
            <NavLink
              to={category.to}
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              {category.text}
            </NavLink>
          </li>
        ))}
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
            {context.count}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
