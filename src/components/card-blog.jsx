import { Link } from "react-router-dom";

export const CardBlog = ({ photo, url }) => {
  return (
    <article className=" flex  flex-col md:w-[28rem] h-fit p-4 md:h-96">
      <Link to={`/${url}`}>
        <div className="h-full w-full object-cover">
          <img src={photo} alt="photo" />
        </div>
        <div>
          <h3 className="font-semibold text-gray">Categoria</h3>
          <h4>Text</h4>
        </div>
      </Link>
    </article>
  );
};
