import { Banner } from "../components/banner-blog";
import { Navbar } from "../components/navbar";
import photo from "../assets/photo2.jpg";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import author from "../assets/photo4.jpg";

import { SocialMidia } from "../components/social-midia";
import { AuthorCard } from "../components/card-author";

export const BlogInfo = () => {
  return (
    <>
      <section>
        <Navbar />
        <Banner
          photo={photo}
          title={"titulodckkdkdkekeee"}
          category={"tedfkkdkkkekdkech"}
          author={"Mahumane"}
          data={"28 de outubro de 2024"}
        />
      </section>
      <section className="mx-auto space-y-20 max-w-7xl py-14">
        <div>
          <div className="flex gap-4">
            {/* Ícone do Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://2em-front.vercel.app/blog/`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full hover:opacity-90"
            >
              <FaFacebook size={24} />
            </a>

            {/* Ícone do WhatsApp */}
            <a
              href={`https://wa.me/?text=Veja%20isso:%20https://2em-front.vercel.app/blog/`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-3 rounded-full hover:opacity-90"
            >
              <FaWhatsapp size={24} />
            </a>

            {/* Ícone do LinkedIn */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://2em-front.vercel.app/blog/`}
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
          <h2 className="font-bold text-2xl leading-snug">Titulo</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in
            possimus perspiciatis, eos omnis sint exercitationem, modi voluptate
            maiores earum nesciunt sed quibusdam officiis? Neque voluptas in ea
            alias dolor.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <AuthorCard
            author={"Mahumane"}
            description={
              "lol  dcjdnkwmkedee fccjckmkcemefe fekkfemoejsgierguirwg rebg vje vjenfwieor0woefi fanefew fjnfioewnwe jk"
            }
            photo={author}
          />
        </div>
      </section>
      <SocialMidia />
    </>
  );
};
