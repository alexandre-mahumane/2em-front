import { Banner } from "../components/banner";
import { Navbar } from "../components/navbar";
import photo from "../assets/contact banner.jpg";
import { InputsContact } from "../components/inputs-contact";
import { Footer } from "../components/footer";
import { Location } from "../components/location-frame";
import { SocialMidia } from "../components/social-midia";

export const Contact = () => {
  return (
    <>
      <section>
        <Navbar />
        <Banner title={"Contato"} photo={photo} text={"Fale conosco"} />
      </section>
      <section className="mx-auto py-14 max-w-7xl">
        <h2 className="font-bold text-2xl leading-snug">
          Nós queremos ouvir você
        </h2>
        <p className="text-lg">
          Preencha as informações abaixo e deixe sua mensagem:
        </p>
        <div className="flex space-x-4">
          <InputsContact />
          <Location />
        </div>
      </section>
      <Footer />
      <SocialMidia />
    </>
  );
};
