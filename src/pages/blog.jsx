import { CardBlog } from "../components/card-blog";
import { Navbar } from "../components/navbar";
import photo from "../assets/photo2.jpg";
export const Blog = () => {
  return (
    <>
      <Navbar />

      <div className="flex gap-16 justify-center flex-wrap max-w-7xl mx-auto">
        <CardBlog photo={photo} />
        <CardBlog photo={photo} />
        <CardBlog photo={photo} />
        <CardBlog photo={photo} />
      </div>
    </>
  );
};
