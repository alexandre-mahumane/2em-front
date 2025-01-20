import { Link } from "react-router-dom";

export const CardBlog = ({ photo, url, categoria, text }) => {
  return (
    <article className=" flex md:mb-40 flex-col md:w-[28rem] h-fit p-1 md:h-96">
      <Link to={`/${url}`}>
        <div className="h-full w-full object-cover">
          <img src={photo} alt="photo" />
        </div>
        <div>
          <h3 className="font-semibold md:mt-[-2rem] text-slate-400">
            {categoria}
          </h3>
          <h4>{text}</h4>
        </div>
      </Link>
    </article>
  );
};
