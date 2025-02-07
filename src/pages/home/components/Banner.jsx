import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";
import img from "../../../assets/img/di1.png";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Banner = () => {
  return (
    <section id="banner" className="pt-20 md:pt-24 bg-slate-200">
      <div className="w-11/12 md:container lg:w-9/12 mx-auto grid place-items-center md:grid-cols-2 gap-10">
        <img
          src={img}
          alt="diba"
          className="place-self-center md:place-self-end md:col-start-2 md:row-start-1 w-9/12 sm:w-7/12 md:w-full"
        />
        <div className="space-y-4 md:col-start-1 md:row-start-1 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl  md:text-3xl lg:text-4xl font-semibold">
            Hi, I'm
            <span className="text-[#064789]">
              <Typewriter
                words={[" Fatema Tabassum", " A Web Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-base w-10/12 sm:w-full xl:w-9/12 mx-auto md:mx-0">
            I'm a Developer eager to create responsive and user-friendly
            websites, with a growing knowledge of backend technologies to build
            complete web solutions.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-3xl">
            <a
              href="https://www.facebook.com/profile.php?id=100089745247384"
              target="_blank"
              className="border-2 border-black p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/fatemaDiba"
              target="_blank"
              className="border-2 border-black p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/fatema-tabassum-a34033262"
              target="_blank"
              className="border-2 border-black p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"
            >
              <FaLinkedin />
            </a>
          </div>
          <a
            href="/resume_of_fatema_tabassum_diba.pdf"
            download
            className="mt-5 inline-block"
          >
            <button className="font-bold hover:bg-blue-800 color-accent py-3 px-2 md:px-5 rounded-md flex mx-auto md:mx-0">
              Download Resume
              <MdOutlineDownloadForOffline className="text-2xl ml-2" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
