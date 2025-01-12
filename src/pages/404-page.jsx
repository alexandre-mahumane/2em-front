import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <BiErrorCircle className="text-red-500 text-8xl" />
      <h1 className="text-6xl font-bold text-red-500 mt-4">404</h1>
      <h2 className="text-2xl sm:text-3xl mt-4">Página não encontrada</h2>
      <p className="text-lg sm:text-xl mt-2 text-center px-4">
        A página que você está procurando pode ter sido movida ou não existe
        mais.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition flex items-center"
      >
        <FaHome className="mr-2" />
        Voltar para a página inicial
      </Link>
    </div>
  );
};
