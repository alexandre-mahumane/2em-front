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
      {/* Background and content */}
      <div className="bg-main-blue text-white absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-8">
        <motion.h4
          variants={animation(0)}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-xl sm:text-3xl lg:text-4xl text-center mt-4"
        >
          {title}
        </motion.h4>
        <motion.h3
          variants={animation(1)}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="font-semibold text-3xl sm:text-5xl lg:text-6xl text-center mt-2"
        >
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
          className="mt-12 lg:mt-16"
        >
          <DownArrowSvg />
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" src={photo} alt="banner" />
      </div>
    </div>
  );
};
