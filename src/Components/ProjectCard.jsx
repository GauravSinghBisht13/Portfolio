import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const MAX_TAGS = 4;

const ProjectCard = ({ data, index = 0, active = true }) => {
  const technologies = data.technologies || [];
  const visibleTech = technologies.slice(0, MAX_TAGS);
  const hiddenCount = technologies.length - visibleTech.length;

  return (
    <div
      className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-[#0a0a0c] p-4 text-white transition-[border-color,box-shadow] duration-500 sm:p-5 ${
        active
          ? "border-purple-400/40 shadow-[0_30px_90px_rgba(0,0,0,0.65),0_0_40px_rgba(168,85,247,0.15)]"
          : "border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
      }`}
    >
      <div className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-purple-500/[0.12] blur-3xl" />

      {/* Image */}
      <div className="relative h-[36%] min-h-[120px] shrink-0 overflow-hidden rounded-xl border border-white/10">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/70 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-purple-300 backdrop-blur">
          Project {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Text */}
      <div className="relative mt-4 min-h-0 flex-1 overflow-hidden">
        <h3 className="line-clamp-1 text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
          {data.title}
        </h3>
        <p className="mt-2 line-clamp-5 text-sm leading-6 text-gray-400">
          {data.description}
        </p>

        {visibleTech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {visibleTech.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
            {hiddenCount > 0 && (
              <span className="rounded-lg border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-300">
                +{hiddenCount}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Action */}
      <div className="relative mt-3 shrink-0 border-t border-white/10 pt-3">
        <button
          type="button"
          onClick={() => data.view && window.open(data.view, "_blank")}
          className="group/btn flex w-full items-center justify-center gap-2 rounded-lg border border-purple-400/30 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-200 transition hover:border-purple-400/60 hover:bg-purple-500/20"
        >
          View Project
          <FaArrowUpRightFromSquare className="text-xs transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </button>
      </div>

      {/* Accent underline, same idea as the stat blocks */}
      <div
        className={`absolute bottom-0 left-0 h-px bg-purple-500/70 transition-all duration-500 ${
          active ? "w-full" : "w-12"
        }`}
      />
    </div>
  );
};

export default ProjectCard;
