import { Banner } from "../components/banner";
import { Navbar } from "../components/navbar";
import photo from "../assets/company banner.jpg";
import { CardCompany } from "../components/card-company";
import { CardAboutUs } from "../components/card-about-us";

export const AboutUs = () => {
  return (
    <>
      <section>
        <Navbar />
        <Banner title={"A Empresa"} photo={photo} text={"Nossa Essência "} />
      </section>
      <div className="space-y-40"></div>
      <section className="mx-auto flex justify-center w-full py-8 max-w-7xl">
        <CardCompany />
      </section>
      <section className="mx-auto flex justify-center gap-6 w-full max-w-7xl">
        <CardAboutUs title={"Missão"} text={"text"} />
        <CardAboutUs title={"Valores"} text={"text"} />
        <CardAboutUs title={"Proposito"} text={"text"} />
      </section>
    </>
  );
};
