import { motion } from "motion/react";
export const CardValue = ({ title, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className=" w-[30rem] h-fit"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-lg">{text}</p>
    </motion.div>
  );
};
