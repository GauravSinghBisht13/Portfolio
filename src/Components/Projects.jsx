import React from "react";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";

const Projects = () => {
  const project = useSelector((state) => state.project.project);
  return (
    <>
      <section id="projects">
        <div className="py-10">
          <h1 className="text-5xl font-bold text-white my-8 w-3/4 m-auto gap-2 py-10">
            Projects Gallery
            <p className="border-b-blue-400 border-b-4 w-60  mt-4 "></p>
          </h1>

          <div className="grid grid-cols-3 gap-8 mt-20 w-[85%] m-auto">
            {project.map((item, index) => (
              <ProjectCard key={index} data={item}></ProjectCard>
            ))}
          </div>
        </div>
        <div className="border-b-1 border-white/10"></div>
      </section>
    </>
  );
};

export default Projects;
