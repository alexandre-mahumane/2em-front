export const CardService = ({ variant }) => {
  return (
    <div
      className={`shadow-lg flex flex-col w-96 p-8 h-80 ${
        variant == 1 && "bg-blue-950 text-white"
      }  ${variant == 2 && "bg-white text-black"}`}
    >
      <p className="font-extralight">Serviço</p>
      <h3 className="font-semibold ">Nome do serviço</h3>
      <p className="font-extralight">descriçao</p>
    </div>
  );
};
