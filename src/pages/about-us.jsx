import { Banner } from "../components/banner";
import { Navbar } from "../components/navbar";
import photo from "../assets/company banner.jpg";
import { CardCompany } from "../components/card-company";
import { CardAboutUs } from "../components/card-about-us";
import { Footer } from "../components/footer";
import { SocialMidia } from "../components/social-midia";
import { motion } from "motion/react";
export const AboutUs = () => {
  const companyInfo = [
    {
      title: "Missão",
      text: "Ser a maior alavanca de crescimento sustentável para as PMEs africanas, oferecendo soluções legais e financeiras personalizadas.",
      delay: 0.5,
    },
    {
      title: "Proposta de Valor",
      text: "Fornecer soluções legais e financeiras personalizadas para impulsionar o crescimento sustentável das Pequenas e Médias Empresas (PMEs) no continente africano.",
      delay: 1,
    },
    {
      title: "Valores",
      text: "Agimos com transparência e ética em todas as relações buscando sempre os mais altos padrões de qualidade nos serviços prestados trabalhamos em parceria com os clientes para encontrar as melhores soluções promovendo ideias criativas e estratégias que gerem valor real e contribuindo para o desenvolvimento social e econômico das comunidades atendidas",
      delay: 1.5,
    },
  ];

  const renderMotionCard = (title, text, delay) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 4, delay }}
      viewport={{ once: true }}
    >
      <CardAboutUs title={title} text={text} />
    </motion.div>
  );
  return (
    <>
      <section>
        <Navbar />
        <Banner title={"A Empresa"} photo={photo} text={"Nossa Essência "} />
      </section>
      <div className="px-4 md:px-0">
        <section className="mx-auto flex justify-center w-full py-14 max-w-7xl">
          <CardCompany />
        </section>
        <section className="mx-auto flex md:flex-row flex-col justify-center gap-6 w-full max-w-7xl">
          {companyInfo.map((info) =>
            renderMotionCard(info.title, info.text, info.delay)
          )}
        </section>
      </div>
      <Footer />
      <SocialMidia />
    </>
  );
};
