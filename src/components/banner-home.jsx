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
      <div className="bg-main-blue bg-opacity-80 text-white h-full w-full absolute">
        <div className="mx-auto w-full flex flex-col justify-center h-full max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-semibold text-4xl sm:text-5xl w-full sm:w-72 flex-wrap"
          >
            Elevando o Potencial das PMEs Africanas.
          </motion.h2>
          <Link
            className="animate__animated animate__fadeIn animate__delay-1s font-extralight flex text-lg items-center"
            to={"/contact"}
            aria-label="Fale com um especialista"
          >
            <ArrowSvg />
            Fale com um especialista
          </Link>
        </div>
      </div>
      <img className="w-full" src={photo} alt="banner" />
    </div>
  );
};
