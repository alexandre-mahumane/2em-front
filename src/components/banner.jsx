const DownArrowSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="118"
    fill="none"
    viewBox="0 0 24 48"
    aria-hidden="true"
  >
    <path
      d="M12 2v36m0 0l-6-6m6 6l6-6"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Banner = ({ title, text, photo }) => {
  return (
    <div className="relative min-h-screen">
      <div className="bg-main-blue bg-opacity-80 text-white h-full w-full absolute">
        <div className="mx-auto w-full flex flex-col items-center justify-center h-full max-w-7xl">
          <h4
            className="font-extralight flex flex-col text-lg items-center mt-4"
            aria-label="Fale com um especialista"
          >
            {title}
          </h4>
          <h3 className="text-2xl"> {text}</h3>
          <DownArrowSvg />
        </div>
      </div>
      <img className="w-full" src={photo} alt="banner" />
    </div>
  );
};
