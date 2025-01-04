import { Typewriter } from "react-simple-typewriter";

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-200 py-10">
      <div className="w-11/12 md:container lg:w-9/12 mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-4">
          My
          <span className="text-[#064789]">
            <Typewriter
              words={[" Skills"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-center text-sm md:text-base md:w-[50%] w-[70%] mx-auto">
          Here are some technologies where I am skilled on and I am working with
          those technologies.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 py-20">
          <div className="flex gap-4 justify-center items-center">
            <img src="/assets/html.png" alt="" className="w-10 md:w-14" />
            <progress
              className="progress text-[#3f9094] w-80 h-3 md:h-4"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img src="/assets/css.png" alt="" className="w-10 md:w-14" />
            <progress
              className="progress text-[#3f9094] w-80 h-3 md:h-4"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="/assets/tailwind-css.png"
              alt=""
              className="w-10 md:w-14"
            />
            <progress
              className="progress text-[#3f9094] w-80 h-3 md:h-4"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img src="/assets/javascript.png" alt="" className="w-10 md:w-14" />
            <progress
              className="progress  text-[#3f9094] w-80 h-3 md:h-4"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img src="/assets/mongo.png" alt="" className="w-10 md:w-14" />
            <progress
              className="progress  text-[#3f9094] w-80 h-3 md:h-4"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="/assets/firebase.png"
              alt="firebase"
              className="w-10 md:w-14"
            />
            <progress
              className="progress  text-[#3f9094] w-80 h-3 md:h-4"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="/assets/react-native.png"
              alt="react"
              className="w-10 md:w-14"
            />
            <progress
              className="progress  text-[#3f9094] w-80 h-3 md:h-4"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="/assets/express-js.png"
              alt="react"
              className="w-10 md:w-14"
            />
            <progress
              className="progress  text-[#3f9094] w-80 h-3 md:h-4"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
