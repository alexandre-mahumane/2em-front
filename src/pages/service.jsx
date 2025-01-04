import photo from "../assets/service banner.jpg";
import { Banner } from "../components/banner";
import { CardService } from "../components/card-service";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
export const Service = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner title={"Serviços"} photo={photo} text={"Nossos Serviços"} />
      </div>
      <div className="space-y-40">
        <div className="bg-main-blue">
          <section className="mx-auto py-14 w-full max-w-7xl">
            <section className="flex justify-center space-x-8">
              <CardService variant={1} />
              <CardService variant={2} />
            </section>
          </section>
        </div>

        <section className="mx-auto max-w-7xl">
          <h2 className="font-bold text-2xl leading-snug">Como Atuamos?</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            necessitatibus aliquid nihil suscipit placeat, nostrum aperiam
            molestias dignissimos rerum doloribus culpa deserunt veritatis ea at
            possimus harum. Iste, sint repellat.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};
