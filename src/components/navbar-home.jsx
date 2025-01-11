import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = ({ scroll }) => {
  const [scrollY, setScrollY] = useState(scroll);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "A Empresa", path: "/about-us" },
    { name: "Serviços", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <div
      className={`fixed flex items-center w-full h-24 z-50 transition-all duration-300 ${
        scrollY > 0 || isMobileMenuOpen
          ? "bg-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="flex w-full h-full justify-between mx-auto max-w-7xl px-4 sm:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} className="w-36 h-auto" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-10 text-lg">
          {links.map((link, index) => (
            <li key={index} className="flex flex-col items-center">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:opacity-75 ${
                    isActive ? "font-medium" : "text-gray-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
              <div
                className={`h-[0.1rem] w-full transition-all ${
                  window.location.pathname === link.path
                    ? `${scrollY > 0 ? "bg-blue-bar" : "bg-white"}`
                    : "opacity-0"
                }`}
              ></div>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-20 left-0 w-full bg-white min-h-screen shadow-md text-black transition-all`}
        >
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive ? "font-medium text-blue-bar" : "text-gray-700"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
