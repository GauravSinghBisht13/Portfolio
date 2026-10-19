import React from "react";
import {
  FaBuilding,
  FaCalendarDays,
  FaLocationDot,
  FaGraduationCap,
} from "react-icons/fa6";

const getList = (value) => {
  if (Array.isArray(value)) {
    return value.filter((item) => typeof item === "string" && item.trim());
  }
  if (typeof value === "string" && value.trim()) {
    return [value];
  }
  return [];
};

const Card = ({
  role,
  title,
  position,
  designation,
  company,
  organization,
  duration,
  date,
  period,
  timeline,
  startDate,
  endDate,
  location,
  place,
  description,
  highlights,
  responsibilities,
  achievements,
  technologies,
  skills,
  techStack,
  index = 0,
  total = 1,
  active = true,
}) => {
  const jobTitle =
    role || title || position || designation || "Professional Experience";
  const companyName = company || organization || "Organization";

  const dateText =
    duration ||
    date ||
    period ||
    timeline ||
    [startDate, endDate].filter(Boolean).join(" — ");

  const locationText = location || place || "";

  const points = [
    ...new Set([
      ...getList(description),
      ...getList(highlights || responsibilities || achievements),
    ]),
  ].slice(0, 3);

  const tech = getList(technologies || skills || techStack).slice(0, 5);

  return (
    <article
      className={`relative w-full overflow-hidden rounded-2xl border bg-[#0a0a0a] text-left transition-all duration-500 ${
        active
          ? "border-purple-400/40 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          : "border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      }`}
    >
      {/* Subtle purple ambient glow */}
      <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-purple-500/[0.08] blur-3xl" />

      <div className="relative p-4">
        {/* Identity */}
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/[0.08] text-purple-300">
            {index === 0 ? (
              <FaGraduationCap className="text-base" />
            ) : (
              <FaBuilding className="text-base" />
            )}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">
              {companyName}
            </p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-purple-400">
              Milestone {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Role */}
        <h3 className="text-base font-black leading-tight tracking-tight text-white sm:text-lg">
          {jobTitle}
        </h3>

        {/* Date and location */}
        {(dateText || locationText) && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {dateText && (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-1 text-[10px] text-gray-300">
                <FaCalendarDays className="shrink-0 text-purple-400" />
                {dateText}
              </span>
            )}

            {locationText && (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-1 text-[10px] text-gray-300">
                <FaLocationDot className="shrink-0 text-purple-400" />
                {locationText}
              </span>
            )}
          </div>
        )}

        {/* Highlights */}
        {points.length > 0 && (
          <ul className="mt-3 space-y-1.5 border-t border-white/[0.07] pt-3">
            {points.map((point, i) => (
              <li
                key={`${i}-${point}`}
                className="flex items-start gap-2 text-[11px] leading-relaxed text-gray-400"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                <span className="line-clamp-3">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        {tech.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-purple-400/15 bg-purple-500/[0.05] px-1.5 py-0.5 text-[9px] font-medium text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Purple bottom accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
    </article>
  );
};

export default Card;
