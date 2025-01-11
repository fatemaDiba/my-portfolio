import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id, name, short_description, image, live_link } = data;

  const handleDetails = (id) => {};

  return (
    <div className="flex flex-col h-full">
      <div className="rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
        <div className="relative">
          <a href={live_link} target="_blank">
            <img className="w-full h-56 object-contain" src={image} alt="" />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href={live_link} target="_blank" rel="noopener noreferrer">
            <div className="text-xs absolute top-0 right-0 rounded-xl bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <FaLink />
            </div>
          </a>
        </div>
        <div className="px-6 py-4 flex-grow">
          <a
            href={live_link}
            target="_blank"
            className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
          >
            {name}
          </a>
          <p className="text-gray-500 text-sm">{short_description}</p>
        </div>
        <Link
          to={`/details/${id}`}
          onClick={() => handleDetails(id)}
          className="mt-auto w-[50%] text-sm mx-auto font-semibold hover:bg-[#35627a]  color-accent py-2 px-2 md:px-5 rounded-2xl mb-5 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
