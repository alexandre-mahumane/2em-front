import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import photo from "../assets/photo4.jpg";
import { motion } from "motion/react";

export const Card = () => {
  return (
    <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-10">
      <motion.div
        animate={{ x: 0 }}
        initial={{ scale: 0.3 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        viewport={{ once: true }}
        className=" w-full md:w-3/6 h-96"
      >
        <img
          className="w-full h-full object-cover rounded-lg"
          src={photo}
          alt="Mulher pensando sobre resultados empresariais"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center text-wrap w-full md:w-1/2 flex-wrap  md:space-y-4"
      >
        <h2 className="font-bold text-5xl leading-snug">
          Você sabe o que precisa fazer para alcançar melhores resultados?
        </h2>
        <p className="text-xl leading-relaxed">
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
      </motion.div>
    </div>
  );
};
