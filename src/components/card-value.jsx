import { motion } from "motion/react";
export const CardValue = ({ title, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 4 }}
      viewport={{ once: true }}
      className="w-full md:w-[30rem] h-fit"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-xl">{text}</p>
    </motion.div>
  );
};
