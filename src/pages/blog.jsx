import { CardBlog } from "../components/card-blog";
import { Navbar } from "../components/navbar";
import photo from "../assets/photo2.jpg";
import { Footer } from "../components/footer";
import { SocialMidia } from "../components/social-midia";
import { motion } from "motion/react";
export const Blog = () => {
  const renderMotionCard = (photo) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <CardBlog photo={photo} />
    </motion.div>
  );
  return (
    <>
      <Navbar />

      <div className="flex gap-4  py-28 justify-center flex-wrap max-w-7xl mx-auto">
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
        {renderMotionCard(photo)}
      </div>
      <Footer />
      <SocialMidia />
    </>
  );
};
