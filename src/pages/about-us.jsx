import { Banner } from "../components/banner";
import { Navbar } from "../components/navbar";
import photo from "../assets/company banner.jpg";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Banner title={"A Empresa"} photo={photo} text={"Nossa Essência "} />
    </>
  );
};
