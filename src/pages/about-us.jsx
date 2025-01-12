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
      text: "A nossa missão é capacitar PMEs africanas com soluções legais e financeiras que promovem o crescimento sustentável e o sucesso no mercado competitivo.",
      delay: 0.5,
    },
    {
      title: "Proposta de Valor",
      text: "Oferecemos consultoria personalizada, baseada em confiança e experiência, ajudando as PMEs africanas a alcançar seu máximo potencial através de soluções estratégicas e práticas.",
      delay: 1,
    },
    {
      title: "Valores",
      text: "Comprometemo-nos com a excelência, integridade, inovação e colaboração, mantendo sempre o foco em soluções que tragam impacto positivo e duradouro para nossos clientes.",
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
        <section className="mx-auto flex  flex-col justify-center gap-6 w-full max-w-7xl">
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
