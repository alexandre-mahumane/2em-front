import { motion } from "motion/react";
export const CardService = ({ variant, service, description }) => {
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
      className={`shadow-lg flex space-y-14 flex-col w-full lg:w-1/2 p-8 md:px-14 lg:h-96 ${
        variant == 1 && "bg-sky-900 text-white"
      }  ${variant == 2 && "bg-white text-sky-900"}`}
    >
      <p className="">Serviço</p>
      <div className="space-y-4">
        <h3 className="font-semibold text-5xl">{service}</h3>
        <p className="text-xl">{description}</p>
      </div>
    </motion.div>
  );
};
