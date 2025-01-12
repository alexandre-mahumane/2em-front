export const CardAboutUs = ({ title, text }) => {
  return (
    <div className=" w-full md:w-96 h-fit">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-xl">{text}</p>
    </div>
  );
};
