import React from "react";
import { FaArrowUpRightFromSquare, FaBolt } from "react-icons/fa6";

const AchivementCard = ({
  title,
  description,
  icon: Icon,
  value,
  category,
  index = 0,
  featured = false,
}) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-500 ease-out hover:-translate-y-1.5 sm:rounded-3xl sm:p-6 lg:p-7 ${
        featured
          ? "border-purple-400/30 bg-gradient-to-br from-purple-500/[0.10] via-[#0a0a0a] to-violet-500/[0.04] shadow-[0_15px_60px_rgba(139,92,246,0.07)]"
          : "border-white/[0.09] bg-white/[0.025] hover:border-purple-400/30 hover:bg-purple-400/[0.035]"
      }`}
    >
      {/* Decorative purple glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full bg-purple-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-violet-400/[0.14] sm:h-48 sm:w-48" />

      {/* Background number */}
      <span className="pointer-events-none absolute right-4 top-3 select-none text-5xl font-black tracking-tighter text-white/[0.035] transition-colors duration-500 group-hover:text-purple-300/[0.10] sm:right-5 sm:top-4 sm:text-6xl">
        {number}
      </span>

      {/* Icon and category */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-400/[0.08] text-purple-300 transition-all duration-500 group-hover:rotate-[-5deg] group-hover:scale-110 group-hover:border-violet-300/30 group-hover:text-violet-200 sm:h-14 sm:w-14 sm:rounded-2xl">
          {Icon ? (
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <FaBolt className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </div>

        <span className="mt-1 max-w-[60%] truncate rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-400 sm:px-2.5 sm:text-[10px] sm:tracking-[0.14em]">
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
          {category || "Milestone"}
        </span>
      </div>

      {/* Optional metric */}
      {value && (
        <p className="mt-5 break-words text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          {value}
        </p>
      )}

      {/* Text content */}
      <div className={value ? "mt-2" : "mt-6 sm:mt-7"}>
        <h3 className="break-words text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-200 sm:text-xl lg:text-2xl">
          {title}
        </h3>

        <p className="mt-3 break-words text-xs leading-6 text-gray-400 transition-colors duration-300 group-hover:text-gray-300 sm:text-sm sm:leading-7">
          {description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="mt-auto flex items-center justify-between gap-3 pt-6 sm:pt-7">
        <div className="h-[3px] w-10 shrink-0 overflow-hidden rounded-full bg-white/10 sm:w-12">
          <div className="h-full w-0 rounded-full bg-gradient-to-r from-purple-400 to-violet-300 transition-all duration-500 group-hover:w-full" />
        </div>

        <span className="flex min-w-0 items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-gray-600 transition-colors duration-300 group-hover:text-purple-300 sm:gap-2 sm:text-[10px] sm:tracking-[0.14em]">
          <span className="truncate">Career impact</span>
          <FaArrowUpRightFromSquare className="shrink-0" />
        </span>
      </div>
    </article>
  );
};

export default AchivementCard;
