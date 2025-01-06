import { Banner } from "../components/banner-home";
import { Card } from "../components/description-card";
import { Navbar } from "../components/navbar-home";

export const Home = () => {
  return (
    <>
      <Navbar scroll={0} />
      <Banner />
      <section className=" flex justify-center mt-20 max-w-7xl mx-auto">
        <Card />
      </section>
    </>
  );
};
