import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "A Empresa", path: "/about-us" },
    { name: "Serviços", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-white shadow-md z-50 transition-all duration-300">
      <nav className="flex justify-between items-center w-full h-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Logo */}
        <div className="w-32 h-full">
          <Link to="/">
            <img
              src={logo}
              className="w-full h-full object-contain"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center h-full space-x-8 text-gray-500 text-lg">
          {links.map((link, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-blue-500 ${
                    isActive ? "font-semibold text-blue-500" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
              {/* Underline effect */}
              <div
                className={`absolute left-0 bottom-0 h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                  window.location.pathname === link.path ? "bg-blue-500" : ""
                }`}
              ></div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden bg-black  flex flex-col items-center justify-center space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-white min-h-screen shadow-md absolute top-20 left-0 w-full py-4 px-4 space-y-4 text-gray-700">
          {links.map((link, index) => (
            <li key={index} className="text-lg">
              <NavLink
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-1 rounded-md hover:bg-blue-100 ${
                    isActive ? "font-semibold text-blue-500" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
