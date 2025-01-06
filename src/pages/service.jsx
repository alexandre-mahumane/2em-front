import photo from "../assets/service banner.jpg";
import { Banner } from "../components/banner";
import { Navbar } from "../components/navbar";
export const Service = () => {
  return (
    <>
      <Navbar />

      <Banner title={"Serviços"} photo={photo} text={"Nossos Serviços"} />
    </>
  );
};
