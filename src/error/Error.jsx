import Lottie from "lottie-react";
import error from "../assets/error.json";
const Error = () => {
  return (
    <div>
      <body className="flex flex-col h-screen justify-center items-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-7xl md:text-[120px] font-extrabold text-gray-700">
              404
            </h1>
            <div className="w-[15%] md:w-[25%]">
              <Lottie animationData={error} className="text-sm"></Lottie>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
            Page Not Found
          </p>
          <a
            href="/"
            className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
          >
            Go Home
          </a>
        </div>
      </body>
    </div>
  );
};

export default Error;
