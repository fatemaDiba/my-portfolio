import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="flex gap-5 justify-between footer bg-neutral text-neutral-content items-center py-10 px-14 md:px-40">
      <aside>
        <p className="">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="flex gap-4 justify-center items-center">
        <a
          href="https://www.facebook.com/profile.php?id=100089745247384"
          target="_blank"
          className="border-2 border-white/70 p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://github.com/fatemaDiba"
          target="_blank"
          className="border-2 border-white/70 p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/fatema-tabassum-a34033262"
          target="_blank"
          className="border-2  border-white/70 p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"
        >
          <FaLinkedin />
        </a>
      </nav>
    </footer>
  );
};
