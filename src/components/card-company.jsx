import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import photo from "../assets/photo4.jpg";

export const CardCompany = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gray justify-between relative flex flex-col mr-32 w-[32rem] px-10 py-8 h-80">
        <div>
          <h3 className="font-semibold ">Sobre a Empresa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            doloribus blanditiis sit reiciendis! Exercitationem quidem molestiae
            nemo eaque magnam, id nihil ipsam quod, labore, quo sequi eum
            laboriosam deleniti ducimus?
          </p>
        </div>
        <div>
          <Link
            className="text-link-text font-extralight flex items-center space-x-2"
            to="/contact"
          >
            <FaArrowRight />
            <span>Fale com um especialista</span>
          </Link>
        </div>
      </div>
      <div className="absolute right-48 w-80 h-48 object-cover ">
        <img className="w-full  h-full" src={photo} alt="people" />
      </div>
    </div>
  );
};
