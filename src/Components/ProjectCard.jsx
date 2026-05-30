import React from "react";

const ProjectCard = ({ index, data }) => {
  console.log(data);

  return (
    <div className="border-white/10 bg-white/5 rounded-2xl px-5 py-5 transition transform hover:-translate-y-2 hover:shadow-xl group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:shadow-xl">
      {/* Image Wrapper (IMPORTANT for zoom) */}
      <div className="overflow-hidden rounded-xl h-48">
        <img
          src={data.image}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="text-white mt-5">
        <p className="text-3xl font-bold">{data.title}</p>
        <p className="text-lg opacity-60 mt-2">{data.description}</p>

        <div className="flex gap-3 mt-10 flex-wrap">
          {data.technologies.map((technologies, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 px-2 py-2"
            >
              {technologies}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => window.open(data.view, "_blank")}
        className="border border-gray-600 px-6 py-3 rounded-lg mt-5 w-[95%] m-auto justify-center hover:bg-gray-800 transition flex items-center gap-2 text-white"
      >
        View Project
      </button>

      <div className="border-b-2 border-white/10"></div>
    </div>
  );
};

export default ProjectCard;
