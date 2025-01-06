import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

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
      className={`fixed flex items-center w-full h-20 z-50 transition-all duration-300 ${
        scrollY > 0 ? "bg-white shadow-md" : "bg-transparent text-white"
      }`}
    >
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
