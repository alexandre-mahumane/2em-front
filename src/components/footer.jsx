import { FaArrowRight, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const textStyle = "font-semibold text-xl";

  return (
    <footer className="bg-footer-background text-lg mt-10 p-2 w-full text-white ">
      <div className="mx-auto max-w-7xl space-y-4 justify-around md:flex-row flex-col flex">
        <div className="md:w-1/5 w-full">
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

        <div className="md:w-1/5 w-full">
          <h5 className={textStyle}>Conecte-se com a gente</h5>
          <div className="space-y-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
              aria-label="Visit our Facebook page"
            >
              <div className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
                <FaFacebookF size={20} className="text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium">Facebook</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
              aria-label="Visit our LinkedIn page"
            >
              <div className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
                <FaLinkedinIn size={20} className="text-blue-500" />
              </div>
              <span className="text-gray-700 font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/5 w-full">
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
        <div>
          <h5 className={textStyle}>Entre em Contato</h5>
          <a href="tel:+">+258 8400000000</a>
        </div>
      </div>
    </footer>
  );
};
