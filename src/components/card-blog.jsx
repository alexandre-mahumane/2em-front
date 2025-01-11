export const CardBlog = ({ photo }) => {
  return (
    <article className=" flex  flex-col md:w-[28rem] h-fit p-4 md:h-96">
      <div className="h-full w-full object-cover">
        <img src={photo} alt="photo" />
      </div>
      <div>
        <h3 className="font-semibold text-gray">Categoria</h3>
        <h4>Text</h4>
      </div>
    </article>
  );
};
