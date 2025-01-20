import { Banner } from "../components/banner-blog";
import { Navbar } from "../components/navbar";
import photo from "../assets/photo2.jpg";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import author from "../assets/photo4.jpg";
import data from "../data";
import { SocialMidia } from "../components/social-midia";
import { AuthorCard } from "../components/card-author";
import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";

export const BlogInfo = () => {
  const { id } = useParams();
  const content = data.find((item) => item.link === id);

  if (!content) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Conteúdo não encontrado!</h1>
        <p>Verifique o link ou volte para o blog.</p>
      </div>
    );
  }

  return (
    <>
      <section>
        <Navbar />
        <Banner
          photo={content.photo || photo}
          title={content.titulo}
          category={content.categoria}
          author={content.author[0].name}
          data={content.author[0].date}
        />
      </section>
      <section className="mx-auto space-y-20 px-6 max-w-7xl py-14">
        <div>
          <div className="flex gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://2em-front.vercel.app/blog/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full hover:opacity-90"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={`https://wa.me/?text=Veja%20isso:%20https://2em-front.vercel.app/blog/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-3 rounded-full hover:opacity-90"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://2em-front.vercel.app/blog/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full hover:opacity-90"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="mt-4 text-slate-400 font-semibold text-xl">
            Compartilhe isso!
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-3xl leading-snug">{content.titulo}</h2>
          {content.conteudo.map((item) => (
            <div>
              {" "}
              <h2 className="text-2xl font-bold text-slate-600">
                {item.subtitulo}
              </h2>
              <p className="text-xl">{item.texto}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <AuthorCard
            author={content.author[0].name}
            description={content.author[0].description}
            photo={content.author[0].authorPhoto}
          />
        </div>
      </section>
      <Footer />
      <SocialMidia />
    </>
  );
};
