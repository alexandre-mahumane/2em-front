import photo from "../assets/service banner.jpg";
import { Banner } from "../components/banner";
import { CardService } from "../components/card-service";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SocialMidia } from "../components/social-midia";
import { motion } from "motion/react";
export const Service = () => {
  const data = [
    {
      service: "Consultoria de Processos Legais",
      description:
        "Auxiliamos PMEs na regularização e conformidade legal, garantindo segurança jurídica para operar e crescer.",
      variant: 1,
    },
    {
      service: "Gestão",
      description:
        "Implementamos estratégias para otimizar operações, reduzir custos e melhorar a eficiência empresarial.",
      variant: 2,
    },
    {
      service: "Contabilidade",
      description:
        "Oferecemos soluções contábeis completas, desde a escrituração até a análise financeira, para manter sua empresa saudável.",
      variant: 1,
    },
    {
      service: "Marketing e Vendas",
      description:
        "Desenvolvemos estratégias eficazes para aumentar a visibilidade da sua marca e impulsionar suas vendas.",
      variant: 2,
    },
  ];

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
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-6 md:space-y-0 flex-col justify-center ">
              {data.map((item) => (
                <div>
                  <CardService
                    variant={item.variant}
                    description={item.description}
                    service={item.service}
                    key={item.service}
                  />
                </div>
              ))}
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
