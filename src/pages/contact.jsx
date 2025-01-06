import { Banner } from "../components/banner";
import { Navbar } from "../components/navbar";
import photo from "../assets/contact banner.jpg";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <Banner title={"Contato"} photo={photo} text={"Fale conosco"} />
    </>
  );
};
