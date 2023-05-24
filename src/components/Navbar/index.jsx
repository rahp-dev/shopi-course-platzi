import { NavLink } from "react-router-dom";

let menu_right = [
  {
    to: "/",
    text: "TailwindCSS Shop",
    className: "font-extrabold text-lg",
  },
  {
    to: "/ropa",
    text: "Ropa",
    className: "",
  },
  {
    to: "/electronicos",
    text: "Electronicos",
    className: "",
  },
  {
    to: "/muebles",
    text: "Muebles",
    className: "",
  },
  {
    to: "/juguetes",
    text: "Juguetes",
    className: "",
  },
  {
    to: "/otros",
    text: "Otros",
    className: "",
  },
];

let menu_left = [
  {
    to: "mailto:rahp.dev@gmail.com",
    text: "rahp.dev@gmail.com",
    className: "text-sky-400",
  },
  {
    to: "/my-orders",
    text: "Mis ordenes",
    className: "",
  },
  {
    to: "/my-account",
    text: "Mi cuenta",
    className: "",
  },
  {
    to: "/sign-in",
    text: "Ingresa",
    className: "",
  },
  {
    to: "/total",
    text: "🛒 0",
    className: "",
  },
];

const Navbar = () => {
  const textDecoration = "text-slate-400";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-12 text-base font-semibold bg-slate-800 text-slate-200">
      <ul className="flex items-center gap-4">
        {menu_right.map((link) => (
          <li key={link.text} className={link.className}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? textDecoration : undefined
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-4">
        {menu_left.map((link) => (
          <li key={link.text} className={link.className}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? textDecoration : undefined
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
