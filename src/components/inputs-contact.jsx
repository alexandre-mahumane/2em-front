export const InputsContact = () => {
  const style = "outline-none py-1 px-4 bg-gray rounded-md w-full";
  const textStyle = "font-semibold text-lg";
  return (
    <form className="md:w-1/2 w-full space-y-6">
      <div>
        <h5 className={textStyle}>Nome</h5>
        <input className={`${style} `} type="text" name="name" />
      </div>
      <div className="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-4 w-full">
        <div className="w-full">
          <h5 className={textStyle}>Email</h5>
          <input className={`${style} `} type="email" name="email" />
        </div>
        <div className="w-full">
          <h5 className={textStyle}>Telefone</h5>
          <input className={`${style} `} type="tel" name="phone" />
        </div>
      </div>
      <div>
        <h5 className={textStyle}>Empresa</h5>
        <input className={`${style} `} type="text" name="company" />
      </div>
      <div>
        <h5 className={textStyle}>Mensagem</h5>
        <textarea name="" className={`${style} h-20`}></textarea>
      </div>
      <button className="bg-blue-bar rounded-md text-white p-1">
        Enviar Mensagem
      </button>
    </form>
  );
};
