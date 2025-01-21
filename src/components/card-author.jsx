export const AuthorCard = ({ photo, author, description }) => {
  return (
    <div className="md:w-[40rem] w-full flex md:flex-row flex-col items-center md:space-x-6">
      <div>
        <div className="w-28 h-full flex items-center">
          {" "}
          <img className="h-28 w-28 rounded-full" src={photo} alt="author" />
        </div>
      </div>
      <div className="w-full flex-col md:items-start md:text-start text-center items-center flex space-y-4">
        <h4 className="font-medium text-4xl">{author}</h4>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};
