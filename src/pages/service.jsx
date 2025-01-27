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
      <div className="space-y-10 md:space-y-40">
        <div className="bg-main-blue">
          <section className="mx-auto  px-6 lg:px-0 py-14 w-full max-w-7xl">
            <section className="flex md:flex-row space-y-6 md:space-y-0 flex-col justify-center md:space-x-8">
              <CardService
                variant={1}
                service={"GOVERNANÇA"}
                description={
                  "Apoio na Estruturação da Governança Corporativa, Estruturação de Conselhos, Secretaria de Governança e Avaliação de Conselhos."
                }
              />
              <CardService
                variant={2}
                service={"GESTÃO"}
                description={
                  "Apoio à liderança das organizações na elaboração e condução de um modelo de gestão eficaz."
                }
              />
            </section>
          </section>
        </div>

        <section className="mx-auto px-6 lg:px-0 max-w-7xl">
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
            Estabelecemos uma relação de confiança com nossos clientes e
            buscamos, de forma conjunta, as melhores soluções para cada
            situação. Entendemos que cada cliente possui questões particulares,
            e precisa de soluções específicas. Não existe uma solução única para
            todos. É isso que faz a diferença.
          </motion.p>
        </section>
      </div>
      <Footer />
      <SocialMidia />
    </>
  );
};
