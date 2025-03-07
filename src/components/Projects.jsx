import React from "react";
import { projectList } from "./data";

const Projects = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="projects">
      <div className="pb-6">
        <p className="text-4xl mb-3 font-bold primary-color">Projects</p>
        <p className="text-gray-400 text-xl font-bold">Here are some of my projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                      shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center 
                      sm:h-[220px] md:h-[280px] lg:h-[320px] h-[350px] bg-cover relative"
          >
            <img
              src={project.src}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="opacity-0 group-hover:opacity-90 bg-black/80 absolute inset-0 flex flex-col 
                         justify-center items-center text-center px-4"
            >
              <p className="text-2xl font-bold primary-color mb-2">
                {project.title}
              </p>
              <p className="text-gray-200 text-xl">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
