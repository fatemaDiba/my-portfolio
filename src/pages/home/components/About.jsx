import img from "../../../assets/img/diba.jpg";
const About = () => {
  return (
    <section id="about" className=" bg-slate-200 py-20">
      <div className="w-11/12 md:container lg:w-9/12 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-[#064789]">About </span>
            Me
          </h2>
          <p className="text-center text-sm md:text-base w-[70%] md:w-[50%] mx-auto">
            Here is a brief about myself that let you know who I am.
          </p>
        </div>
        <div className="grid gap-10 place-items-center grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src={img}
              alt="diba"
              className=" rounded-full md:w-[70%] w-1/2 place-self-center"
            />
          </div>
          <div className="px-5 md:px-0">
            <p className="text-center md:text-start 2xl:w-10/12">
              I’m <strong>Fatema Tabassum</strong>, a dedicated
              <strong> Web Developer</strong> focused on creating user-friendly
              and visually captivating websites. With a strong foundation in
              <strong> React</strong>, <strong> JavaScript</strong>, and modern
              web technologies, I aim to deliver seamless and impactful digital
              solutions. My work reflects my passion for coding, creativity, and
              continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
