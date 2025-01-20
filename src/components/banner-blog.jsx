import { motion } from "motion/react";

const animation = (delay) => ({
  hidden: { y: 70, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, delay: delay },
  },
});

export const Banner = ({ title, category, photo, author, data }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background overlay and content */}
      <div className="bg-main-blue flex items-center justify-center text-black absolute inset-0 z-10 ">
        <motion.div
          variants={animation(0)}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center px-4 sm:px-8"
        >
          <h4 className="text-base font-medium border border-white rounded-full py-2 px-4 sm:text-lg lg:text-xl text-center mt-4">
            {category}
          </h4>
          <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center mt-2">
            {title}
          </h3>
          <div className=" mt-14 space-x-10  flex justify-between text-black text-base sm:text-lg">
            <p className="truncate">{author}</p>
            <p>{data}</p>
          </div>
        </motion.div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" src={photo} alt="banner" />
      </div>
    </div>
  );
};
