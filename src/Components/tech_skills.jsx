import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaCode, FaChevronRight } from "react-icons/fa";

const TechSkills = () => {
  const skillGroups = useSelector((state) => state.skill.skill);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categoryColors = {
    "Frontend Engineering": "#c084fc",
    "Backend & Databases": "#a78bfa",
    "AI & Data": "#e879f9",
    "Tools & Cloud": "#818cf8",
    "Professional Skills": "#c084fc",
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-4 py-20 text-white sm:px-8 lg:px-12 xl:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-700/[0.07] blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1800px]">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Developer Ecosystem
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            My Tech <span className="text-purple-400">Universe</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            A connected view of the technologies, tools, and strengths I use
            across my development journey.
          </p>
        </div>

        {/* Graph layout */}
        <div className="relative mx-auto w-full">
          {/* Central root node */}
          <div className="relative z-10 mx-auto flex w-fit items-center gap-3 rounded-2xl border border-purple-400/40 bg-[#110b1c] px-6 py-4 shadow-[0_0_35px_rgba(168,85,247,0.16)] sm:px-9 sm:py-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-xl text-purple-300">
              <FaCode />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-300">
                Root Node
              </p>
              <h3 className="mt-1 text-base font-bold sm:text-lg">
                Full Stack Developer
              </h3>
            </div>
          </div>

          {/* Trunk from root to category branches */}
          <div className="mx-auto h-10 w-px bg-gradient-to-b from-purple-400/70 to-purple-400/20" />

          {/* Category branches */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {skillGroups.map((group, groupIndex) => {
              const color =
                group.color || categoryColors[group.title] || "#c084fc";

              const CategoryIcon = group.icon;

              return (
                <div key={group.id || group.title} className="relative min-w-0">
                  {/* Branch connector */}
                  <div
                    className="absolute -top-7 left-1/2 h-7 w-px"
                    style={{
                      background: `linear-gradient(to bottom, ${color}80, ${color}30)`,
                    }}
                  />

                  {/* Category heading */}
                  <div
                    className="relative mb-4 flex min-h-[68px] items-center gap-3 rounded-xl border bg-[#0c0b12] px-4 py-3"
                    style={{
                      borderColor: `${color}50`,
                      boxShadow: `0 0 22px ${color}0b`,
                    }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border text-lg"
                      style={{
                        color,
                        borderColor: `${color}50`,
                        backgroundColor: `${color}12`,
                      }}
                    >
                      {CategoryIcon ? <CategoryIcon /> : <FaCode />}
                    </span>

                    <div className="min-w-0">
                      <p
                        className="text-[9px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color }}
                      >
                        Branch {String(groupIndex + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-sm font-bold leading-snug text-gray-100">
                        {group.title}
                      </h3>
                    </div>

                    <span
                      className="ml-auto shrink-0 rounded-md px-2 py-1 text-[10px]"
                      style={{
                        color,
                        backgroundColor: `${color}12`,
                      }}
                    >
                      {group.skills.length}
                    </span>
                  </div>

                  {/* Vertical branch line */}
                  <div className="relative ml-5 space-y-2.5">
                    <div
                      className="absolute bottom-5 left-0 top-5 w-px"
                      style={{
                        background: `linear-gradient(to bottom, ${color}65, ${color}15)`,
                      }}
                    />

                    {/* Individual skill nodes */}
                    {group.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      const isSelected =
                        selectedSkill?.name === skill.name &&
                        selectedSkill?.category === group.title;

                      return (
                        <button
                          key={`${group.id}-${skill.name}`}
                          type="button"
                          onClick={() =>
                            setSelectedSkill(
                              isSelected
                                ? null
                                : {
                                    ...skill,
                                    category: group.title,
                                    color,
                                  },
                            )
                          }
                          aria-pressed={isSelected}
                          className={`group relative flex min-h-[48px] w-full items-center gap-3 rounded-lg border py-2 pl-4 pr-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                            isSelected
                              ? "border-purple-400/60 bg-purple-500/[0.12]"
                              : "border-white/[0.07] bg-[#09090d] hover:border-white/20 hover:bg-[#100d16]"
                          }`}
                        >
                          {/* Connector from branch to node */}
                          <span
                            className="absolute -left-5 top-1/2 h-px w-5"
                            style={{
                              backgroundColor: `${color}65`,
                            }}
                          />

                          {/* Small branch junction */}
                          <span
                            className="absolute -left-[23px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
                            style={{
                              backgroundColor: color,
                              boxShadow: `0 0 8px ${color}90`,
                            }}
                          />

                          <span
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-base"
                            style={{
                              color,
                              borderColor: isSelected
                                ? `${color}80`
                                : `${color}25`,
                              backgroundColor: `${color}0d`,
                            }}
                          >
                            {SkillIcon ? <SkillIcon /> : <FaCode />}
                          </span>

                          <span className="min-w-0 flex-1 break-words text-xs font-medium leading-5 text-gray-300 transition-colors group-hover:text-white sm:text-[13px]">
                            {skill.name}
                          </span>

                          <FaChevronRight
                            className={`h-2.5 w-2.5 shrink-0 transition-transform ${
                              isSelected
                                ? "translate-x-0.5"
                                : "text-gray-600 group-hover:text-gray-300"
                            }`}
                            style={isSelected ? { color } : undefined}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected skill details */}
        <div className="mx-auto mt-12 min-h-[125px] max-w-2xl">
          {selectedSkill ? (
            <div className="rounded-2xl border border-purple-400/25 bg-[#0b0911] p-6 text-center shadow-[0_0_35px_rgba(168,85,247,0.08)]">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: selectedSkill.color }}
              >
                {selectedSkill.category}
              </p>

              <div className="mt-3 flex items-center justify-center gap-3">
                {selectedSkill.icon && (
                  <span
                    className="text-2xl"
                    style={{ color: selectedSkill.color }}
                  >
                    <selectedSkill.icon />
                  </span>
                )}

                <h3 className="text-xl font-bold sm:text-2xl">
                  {selectedSkill.name}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {selectedSkill.description ||
                  `${selectedSkill.name} is part of my ${selectedSkill.category.toLowerCase()} toolkit.`}
              </p>

              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="mt-4 text-xs font-medium text-purple-400 transition hover:text-purple-300"
              >
                Close details
              </button>
            </div>
          ) : (
            <p className="text-center text-xs text-gray-500">
              <span className="text-purple-400">✦</span> Select any skill node
              to explore it
            </p>
          )}
        </div>

        {/* Category legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {skillGroups.map((group) => {
            const color =
              group.color || categoryColors[group.title] || "#c084fc";

            return (
              <div
                key={group.id || group.title}
                className="flex items-center gap-2 text-xs text-gray-400"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 8px ${color}`,
                  }}
                />
                {group.title}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
