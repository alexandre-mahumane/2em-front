import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import photo from "../assets/photo4.jpg";

export const Card = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full space-y-6 sm:space-y-0 sm:space-x-10">
      <div className="w-full sm:w-3/6 h-72">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={photo}
          alt="Mulher pensando sobre resultados empresariais"
        />
      </div>

      <div className="flex flex-col justify-center text-wrap w-full sm:w-1/2 flex-wrap space-y-4">
        <h2 className="font-bold text-2xl leading-snug">
          Você sabe o que precisa fazer para alcançar melhores resultados?
        </h2>
        <p className="text-lg leading-relaxed">
          Descubra o que juntos podemos fazer para desenvolver a Governança e a
          Gestão da sua empresa.
        </p>
        <Link
          className="text-link-text font-medium flex items-center space-x-2"
          to="/service"
        >
          <FaArrowRight />
          <span>Conheça nossos serviços</span>
        </Link>
      </div>
    </div>
  );
};
