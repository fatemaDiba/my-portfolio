import { useEffect, useState } from "react";
import Card from "./projects/Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="projects" className="bg-slate-200 py-10 px-10 md:px-0">
      <div className="w-11/12 md:container lg:w-9/12 mx-auto mb-10">
        <div className="space-y-4 w-full md:w-9/12 text-center mx-auto mb-10">
          <h2 className="text-2xl md:text-4xl text-center font-semibold">
            My <span className="text-[#064789]">Projects</span>
          </h2>
          <p className="text-center w-[70%] mx-auto">
            Here are some of the projects I’ve worked on, showcasing my skills
            in building functional and visually appealing web applications.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            return <Card data={project} key={project.id}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
