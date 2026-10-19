import React from "react";
import { useSelector } from "react-redux";
import AchivementCard from "./AchivementCard";
import { FaAward } from "react-icons/fa6";

const Achivement = () => {
  const achivement = useSelector((state) => state.achiv.achivement) || [];

  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10 2xl:px-12"
    >
      {/* Subtle purple background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-600/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1800px]">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end lg:mb-14">
          <div className="min-w-0">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300 sm:text-xs">
              <FaAward />
              Proof of progress
            </div>

            {/* Consistent heading size */}
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Key{" "}
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
                Achievements.
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Small wins, meaningful impact, and milestones that reflect my
              growth as a developer.
            </p>
          </div>

          {/* Milestone count */}
          <div className="flex w-fit shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 transition-colors duration-300 hover:border-purple-400/30">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/[0.08] text-purple-300">
              <FaAward className="text-lg" />
            </span>

            <div>
              <p className="text-2xl font-black text-white">
                {String(achivement.length).padStart(2, "0")}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                Milestones
              </p>
            </div>
          </div>
        </div>

        {/* Responsive achievement cards */}
        {achivement.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-7">
            {achivement.map((item, index) => (
              <AchivementCard
                key={`${item.title}-${index}`}
                title={item.title}
                description={item.description}
                icon={item.icon}
                value={item.value}
                category={item.category}
                index={index}
                featured={index === 0}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 text-center text-gray-400">
            Achievements will appear here soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default Achivement;
