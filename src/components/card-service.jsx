import { motion } from "framer-motion";

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
      className={`shadow-lg flex flex-col  w-full p-6 md:p-10 h-96 md:h-96 lg:p-14 lg:gap-10 
        ${variant == 1 ? "bg-sky-900 text-white" : "bg-white text-sky-900"}`}
    >
      <p className="text-lg md:text-xl font-medium">Serviço</p>
      <div className="space-y-3 mt-10 md:mt-0 md:space-y-5 lg:space-y-6 max-w-lg ">
        <h3 className="font-semibold text-4xl md:text-5xl">{service}</h3>
        <p className="text-lg md:text-xl">{description}</p>
      </div>
    </motion.div>
  );
};
