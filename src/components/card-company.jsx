import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import photo from "../assets/photo4.jpg";
import { motion } from "motion/react";
export const CardCompany = () => {
  return (
    <div className="flex items-center">
      <div className="bg-main-blue justify-between relative flex flex-col mr-32 w-2/3 px-32 py-8 h-96">
        <div className="w-4/5">
          <h3 className="font-semibold text-5xl">Sobre a Empresa</h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            doloribus blanditiis sit reiciendis! Exercitationem quidem molestiae
            nemo eaque magnam, id nihil ipsam quod, labore, quo sequi eum
            laboriosam deleniti ducimus? Lorem ipsum
          </p>
        </div>
        <div>
          <Link
            className="text-link-text font-extralight flex items-center space-x-2"
            to="/contact"
          >
            <FaArrowRight />
            <span className="font-semibold">Fale com um especialista</span>
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true }}
        className="absolute right-20 w-2/6 h-80 object-cover "
      >
        <img className="w-full  h-full" src={photo} alt="people" />
      </motion.div>
    </div>
  );
};
