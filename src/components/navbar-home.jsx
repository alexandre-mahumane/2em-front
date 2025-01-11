import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = ({ scroll }) => {
  const [scrollY, setScrollY] = useState(scroll);
  const customHover = "";

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
        scrollY > 0 ? "bg-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <nav className="flex w-full h-full text-xl justify-between mx-auto max-w-7xl">
        <div className="w-36  h-full">
          <Link to="/">
            <img src={logo} className="w-full h-full" alt="" />
          </Link>
        </div>
        <ul className="flex items-center space-x-10">
          {links.map((link, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <li
                key={index}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex mb-3 flex-col"
              >
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
                  className={`h-[0.1rem] min-w-full transition-all ${
                    isHovered || window.location.pathname === link.path
                      ? `${scrollY > 0 ? "bg-blue-bar" : "bg-white"}`
                      : ""
                  }`}
                ></div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
