import { motion } from "motion/react";
export const CardService = ({ variant }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: [0, 15, -10, 0], rotateX: [0, 10, -5, 0] }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className={`shadow-lg flex flex-col w-full sm:w-1/2 p-8 sm:px-14 sm:h-96 ${
        variant == 1 && "bg-blue-700 text-white"
      }  ${variant == 2 && "bg-white text-blue-700"}`}
    >
      <p className="">Serviço</p>
      <h3 className="font-semibold text-5xl">Nome do serviço</h3>
      <p className="text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et animi odit
        error unde, quaerat repudiandae. Recusandae ullam nobis ratione ea illo
        cupiditate sunt sequi aliquid reprehenderit tempore, suscipit
        repudiandae maiores.
      </p>
    </motion.div>
  );
};
