import photo from "../assets/service banner.jpg";
import { Banner } from "../components/banner";
import { CardService } from "../components/card-service";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SocialMidia } from "../components/social-midia";
import { motion } from "motion/react";
export const Service = () => {
  const renderMotion = (delay) => ({
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: delay,
      },
    },
  });
  return (
    <>
      <div>
        <Navbar />
        <Banner title={"Serviços"} photo={photo} text={"Nossos Serviços"} />
      </div>
      <div className="space-y-10 sm:space-y-40">
        <div className="bg-main-blue">
          <section className="mx-auto  px-6 sm:px-0 py-14 w-full max-w-7xl">
            <section className="flex sm:flex-row space-y-6 sm:space-y-0 flex-col justify-center sm:space-x-8">
              <CardService variant={1} />
              <CardService variant={2} />
            </section>
          </section>
        </div>

        <section className="mx-auto px-6 sm:px-0 max-w-7xl">
          <motion.h2
            variants={renderMotion(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold text-4xl leading-snug"
          >
            Como Atuamos?
          </motion.h2>
          <motion.p
            variants={renderMotion(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            necessitatibus aliquid nihil suscipit placeat, nostrum aperiam
            molestias dignissimos rerum doloribus culpa deserunt veritatis ea at
            possimus harum. Iste, sint repellat.
          </motion.p>
        </section>
      </div>
      <Footer />
      <SocialMidia />
    </>
  );
};
