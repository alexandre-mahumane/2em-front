import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const textStyle = "font-semibold";

  return (
    <footer className="bg-footer-background mt-10 p-2 w-full text-white ">
      <div className="mx-auto max-w-7xl justify-around flex">
        <div className="w-1/5">
          <h5 className={textStyle}>Sobre Nós</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            deleniti aspernatur nam rem ipsa sit autem at omnis. Natus fugit
            similique rerum excepturi eaque iusto, ratione facilis porro
            doloribus ducimus?
          </p>
          <Link
            className="text-link-text font-medium flex items-center space-x-2"
            to="/about-us"
          >
            <FaArrowRight />
            <span>Saiba mais</span>
          </Link>
        </div>

        <div className="w-1/5">
          <h5 className={textStyle}>Contate-nos</h5>
          <p>facebook</p>
          <p>Linkedin</p>
        </div>
        <div className="w-1/5">
          <h5 className={textStyle}>Navegue</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Serviços</Link>
            </li>
            <li>
              <Link to="/about-us">A Empresa</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
