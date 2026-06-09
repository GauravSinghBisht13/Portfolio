import React from "react";

const ProjectCard = ({ index, data }) => {
  return (
    <div
      className="border-white/10 bg-white/5 rounded-2xl px-5 py-5 
      flex flex-col h-full
      transition-all duration-300 ease-in-out 
      hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:shadow-xl group"
    >
      {/* Top Content */}
      <div className="flex-grow">
        {/* Image */}
        <div className="overflow-hidden rounded-xl h-48">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* Text */}
        <div className="text-white mt-5">
          <p className="text-3xl font-bold">{data.title}</p>
          <p className="text-lg opacity-60 mt-2">{data.description}</p>

          {/* Tech Tags */}
          <div className="flex gap-3 mt-10 flex-wrap">
            {data.technologies.map((tech, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl bg-white/5 px-2 py-2 text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section (FIXED ALIGNMENT) */}
      <div className="mt-5">
        <div className="border-b border-white/10 mb-5"></div>

        <button
          onClick={() => window.open(data.view, "_blank")}
          className="border border-gray-600 px-6 py-3 rounded-lg w-[95%] mx-auto 
          hover:bg-gray-800 transition flex items-center justify-center text-white"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
