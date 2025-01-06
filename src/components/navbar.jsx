import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "A Empresa", path: "/about-us" },
    { name: "Serviços", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 flex bg-white shadow-md items-center w-full h-20 z-50 transition-all duration-300">
      <nav className="flex w-full text-xl justify-between mx-auto max-w-7xl">
        <div>
          <Link to="/" className="font-bold text-3xl">
            2em
          </Link>
        </div>
        <ul className="flex space-x-10">
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
