import { Banner } from "../components/banner-home";
import { CardValue } from "../components/card-value";
import { Card } from "../components/description-card";
import { Navbar } from "../components/navbar-home";
import photo from "../assets/photo2.jpg";
import { CardBlog } from "../components/card-blog";
import { Footer } from "../components/footer";

export const Home = () => {
  const valuePropositions = [
    {
      title: "Consultoria Legal e Financeira Personalizada para PMEs Africanas",
      text: "Na 2 EM Consulting, capacitamos pequenas e médias empresas africanas a alcançar novos patamares de crescimento e estabilidade. Inspirados pela grandiosidade do Monte Kilimanjaro, oferecemos consultoria legal e financeira estratégica, conectando empresas com soluções personalizadas que refletem confiança, profissionalismo e um profundo entendimento do mercado africano.",
    },
    {
      title: "Elevando o Potencial das PMEs Africanas",
      text: "A 2 EM Consulting é mais do que uma consultoria – somos parceiros estratégicos que impulsionam o crescimento sustentável de PMEs no continente africano. Oferecemos serviços especializados em assessoria legal, financeira e treinamento, ajudando empresas a navegar no cenário empresarial com segurança e assertividade. Nossa essência se traduz em confiança, experiência e conexão local.",
    },
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <section className="space-y-32 flex flex-col items-center py-14 max-w-7xl mx-auto px-6">
        <Card />
        <div className="w-full text-center">
          <h2 className="font-bold mb-14 text-2xl leading-snug">
            Nossa Proposta de Valor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
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
          <h2 className="font-bold text-2xl leading-snug mb-12">Nosso Blog</h2>
          <div className="flex flex-wrap justify-center gap-10 w-full">
            <CardBlog photo={photo} />
            <CardBlog photo={photo} />
            <CardBlog photo={photo} />
            <CardBlog photo={photo} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
