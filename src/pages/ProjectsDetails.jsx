import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const singleData = data.find((item) => item.id === id);
        setProject(singleData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="bg-slate-200 py-10  text-white/90 ">
      <div className="w-11/12 md:container lg:w-9/12 mx-auto mb-10 mt-20">
        <div className="py-10 px-10 md:px-20 bg-[#457b9d] rounded-xl border-t-4 rounded-t-2xl border-[#003049] shadow-2xl">
          <h2 className="text-2xl md:text-4xl text-center font-semibold mb-5">
            Project Overview
          </h2>
          <div>
            <p className="text-xl md:text-2xl font-semibold mb-4">Gallery</p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {project?.images?.map((img, index) => {
                return <img key={index} src={img} alt="" />;
              })}
            </div>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              {project.name}
            </p>
            <div>
              Live_link :
              <a href={project.live_link} className="text-sm">
                {project.live_link}
              </a>
            </div>
            <div>
              Client_Git :
              <a href={project.client_git} className="text-sm">
                {project.client_git}
              </a>
            </div>
            {project.server_git && (
              <div>
                Sever_Git :
                <a href={project.server_git} className="text-sm">
                  {project.server_git}
                </a>
              </div>
            )}
            <div className="border  border-white/70 mb-4 mt-4"></div>
            <div className="space-y-3">
              <p className="text-sm md:text-base">
                Short Description : {project.short_description}
              </p>
              <p className="text-sm md:text-base">
                Description : {project.description}
              </p>
              <p className="text-sm md:text-base ">
                Drawbacks :
                <ul className="list-disc ml-10">
                  {project?.drawbacks?.map((draw, index) => {
                    return <li className="text-sm md:text-base">{draw}</li>;
                  })}
                </ul>
              </p>

              <p>
                <span className="text-sm md:text-base">Technologies:</span>
              </p>
              <ul className="lg:w-[60%] text-sm md:text-base grid grid-cols-2 lg:grid-cols-3 gap-4">
                {project?.technologies?.map((tech, index) => {
                  return (
                    <li
                      key={index}
                      className="p-2 bg-white/70 text-sm font-semibold text-black border rounded-xl text-center"
                    >
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
