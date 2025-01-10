import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const SocialMidia = () => {
  return (
    <div className="fixed right-0 bg-blue-700 top-1/2 transform -translate-y-1/2 space-y-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        aria-label="Visit our Facebook page"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        aria-label="Visit our LinkedIn page"
      >
        <FaLinkedinIn size={20} />
      </a>
    </div>
  );
};
