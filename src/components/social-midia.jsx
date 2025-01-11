import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const SocialMidia = () => {
  return (
    <div className="fixed right-0  top-1/2 transform -translate-y-1/2 space-y-1">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white w-10 h-10 flex items-center justify-center"
        aria-label="Visit our Facebook page"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white w-10 h-10 flex items-center justify-center"
        aria-label="Visit our LinkedIn page"
      >
        <FaLinkedinIn size={20} />
      </a>
    </div>
  );
};
