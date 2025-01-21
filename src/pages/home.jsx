import { Banner } from "../components/banner-home";
import { CardValue } from "../components/card-value";
import { Card } from "../components/description-card";
import { Navbar } from "../components/navbar-home";
import photo from "../assets/photo2.jpg";
import { CardBlog } from "../components/card-blog";
import { Footer } from "../components/footer";
import { SocialMidia } from "../components/social-midia";
import { motion } from "motion/react";
import data from "../data";
export const Home = () => {
  const valuePropositions = [
    {
      title: "Consultoria Legal e Financeira Personalizada para PMEs Africanas",
      text: "Na 2 EM Consulting, capacitamos pequenas e médias empresas africanas a alcançar novos patamares de crescimento e estabilidade. Inspirados pela grandiosidade do Monte Kilimanjaro, oferecemos consultoria legal e financeira estratégica.",
    },
    {
      title: "Elevando o Potencial das PMEs Africanas",
      text: "A 2 EM Consulting é mais do que uma consultoria – somos parceiros estratégicos que impulsionam o crescimento sustentável de PMEs no continente africano.",
    },
  ];

  const renderMotionCard = (photo, url, categoria, text, delay) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: delay }}
      viewport={{ once: true }}
    >
      <CardBlog photo={photo} url={url} categoria={categoria} text={text} />
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <Banner />
      <section className="space-y-10 md:space-y-32 flex flex-col items-center py-14 max-w-7xl mx-auto px-6">
        <Card />
        <div className="w-full">
          <h2 className="font-bold mb-14 text-4xl leading-snug">
            Nossa Proposta de Valor
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
            {valuePropositions.map((value) => (
              <CardValue
                key={value.title}
                text={value.text}
                title={value.title}
              />
            ))}
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-bold text-4xl leading-snug mb-12">Nosso Blog</h2>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {data.map((item) =>
              renderMotionCard(
                item.photo,
                `blog/${item.link}`,
                item.categoria,
                item.titulo
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
      <SocialMidia />
    </>
  );
};
