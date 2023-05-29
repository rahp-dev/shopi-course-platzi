import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

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
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-semibold shadow-lg">
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
        <li>🛒2</li>
      </ul>
    </nav>
  );
};

export default Navbar;
