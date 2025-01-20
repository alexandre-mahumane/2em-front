import { CardBlog } from "../components/card-blog";
import { Navbar } from "../components/navbar";
import photo from "../assets/photo2.jpg";
import { Footer } from "../components/footer";
import { SocialMidia } from "../components/social-midia";
import { motion } from "motion/react";
import data from "../data";
export const Blog = () => {
  const renderMotionCard = (photo, url, categoria, text) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <CardBlog photo={photo} url={url} categoria={categoria} text={text} />
    </motion.div>
  );
  return (
    <>
      <Navbar />

      <div className="flex gap-4 w-full py-28 justify-center flex-wrap max-w-7xl mx-auto">
        {data.map((item) =>
          renderMotionCard(
            item.photo,
            `blog/${item.link}`,
            item.categoria,
            item.titulo
          )
        )}
      </div>
      <Footer />
      <SocialMidia />
    </>
  );
};
