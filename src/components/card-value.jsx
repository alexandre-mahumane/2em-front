export const CardValue = ({ title, text }) => {
  return (
    <div className="w-[30rem] h-fit">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-lg">{text}</p>
    </div>
  );
};
