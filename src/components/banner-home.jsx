import { Link } from "react-router-dom";
import photo from "../assets/photo3.jpg";
import { motion } from "framer-motion";

const ArrowSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="24"
    fill="none"
    viewBox="0 0 64 24"
    aria-hidden="true"
  >
    <path
      d="M1 12h54m0 0l-8-8m8 8l-8 8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Banner = () => {
  return (
    <div className="relative min-h-screen">
      {/* Overlay and content */}
      <div className="bg-main-blue bg-opacity-80 text-white absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full sm:max-w-2xl flex-wrap leading-tight"
          >
            Elevando o Potencial das PMEs Africanas.
          </motion.h2>
          <Link
            className="mt-6 flex items-center gap-3 text-lg sm:text-xl font-light animate__animated animate__fadeIn animate__delay-1s"
            to={"/contact"}
            aria-label="Fale com um especialista"
          >
            <ArrowSvg />
            Fale com um especialista
          </Link>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" src={photo} alt="banner" />
      </div>
    </div>
  );
};
