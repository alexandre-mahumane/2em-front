import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "A Empresa", path: "/about-us" },
    { name: "Serviços", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 flex bg-white shadow-md items-center w-full h-24 z-50 transition-all duration-300">
      <nav className="flex w-full text-xl h-full justify-between mx-auto max-w-7xl">
        <div className="w-36  h-full">
          <Link to="/">
            <img src={logo} className="w-full h-full" alt="" />
          </Link>
        </div>
        <ul className="flex  items-center h-full space-x-10">
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
                      ? "bg-blue-bar"
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
