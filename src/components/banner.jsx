import { Link } from "react-router-dom";
import photo from "../assets/photo3.jpg";

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
          <h2 className="font-semibold text-5xl w-72 flex-wrap">
            Elevando o Potencial das PMEs Africanas.
          </h2>
          <Link
            className="font-extralight flex text-lg items-center"
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
