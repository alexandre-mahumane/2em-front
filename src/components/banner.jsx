import { motion } from "motion/react";

const animation = (delay) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const DownArrowSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="118"
    fill="none"
    viewBox="0 0 24 48"
    aria-hidden="true"
  >
    <path
      d="M12 2v36m0 0l-6-6m6 6l6-6"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Banner = ({ title, text, photo }) => {
  return (
    <div className="relative min-h-screen">
      <div className="bg-main-blue bg-opacity-80 text-white h-full w-full absolute">
        <div className="mx-auto w-full flex flex-col items-center justify-center h-full max-w-7xl">
          <motion.h4
            variants={animation(0)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className=" flex flex-col text-4xl items-center mt-4"
          >
            {title}
          </motion.h4>
          <motion.h3
            variants={animation(1)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="font-semibold text-6xl"
          >
            {" "}
            {text}
          </motion.h3>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="mt-20"
          >
            <DownArrowSvg />
          </motion.div>
        </div>
      </div>
      <img className="w-full" src={photo} alt="banner" />
    </div>
  );
};
