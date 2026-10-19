import { useEffect, useRef, useState } from "react";
import { HiBriefcase } from "react-icons/hi2";
import { FaBug, FaCode } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";

const stats = [
  {
    id: 1,
    label: "Professional Experience",
    description: "Building and shipping software",
    icon: HiBriefcase,
    type: "experience",
    color: "text-purple-400",
  },
  {
    id: 2,
    label: "Bugs Resolved",
    description: "Debugging and improving reliability",
    icon: FaBug,
    type: "bugs",
    color: "text-purple-400",
  },
  {
    id: 3,
    label: "Software Engineering",
    description: "Frontend, backend and API integration",
    icon: FaCode,
    type: "engineering",
    color: "text-purple-400",
  },
  {
    id: 4,
    label: "AI & LLMs",
    description: "Exploring AI-powered applications",
    icon: FaBrain,
    type: "ai",
    color: "text-purple-400",
  },
];

export default function ProgressBar() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [exp, setExp] = useState(0);
  const [bugs, setBugs] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const expInterval = setInterval(() => {
      setExp((prev) => {
        if (prev >= 2) {
          clearInterval(expInterval);
          return 2;
        }

        return Math.min(prev + 0.1, 2);
      });
    }, 70);

    const bugsInterval = setInterval(() => {
      setBugs((prev) => {
        if (prev >= 250) {
          clearInterval(bugsInterval);
          return 250;
        }

        return Math.min(prev + 10, 250);
      });
    }, 35);

    return () => {
      clearInterval(expInterval);
      clearInterval(bugsInterval);
    };
  }, [isVisible]);

  const getValue = (type) => {
    switch (type) {
      case "experience":
        return `${exp.toFixed(1)}+`;
      case "bugs":
        return `${bugs}+`;
      case "engineering":
        return "Full Stack";
      case "ai":
        return "AI + LLMs";
      default:
        return "";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050505] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Subtle purple ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-purple-600/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-[1800px]">
        {/* Section heading */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400 sm:text-sm">
              By the numbers
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            A little about my <span className="text-purple-400">journey.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A snapshot of my engineering experience, problem-solving, and
            ongoing exploration of AI.
          </p>
        </div>

        {/* Open metrics — no cards */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className={`group relative min-w-0 py-2 sm:py-4 lg:px-7 lg:py-2 xl:px-10 ${
                  index > 0 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                {/* Icon and small accent */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-purple-500/[0.08]">
                    <Icon
                      className={`${stat.color} text-xl transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  <span className="h-px w-8 bg-purple-500/40 transition-all duration-300 group-hover:w-12 group-hover:bg-purple-400" />
                </div>

                {/* Animated metric */}
                <div className="mb-3 min-h-[52px]">
                  <span
                    className={`block break-words text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-4xl xl:text-[2.6rem] ${
                      stat.type === "engineering" || stat.type === "ai"
                        ? "text-2xl sm:text-3xl xl:text-4xl"
                        : ""
                    }`}
                  >
                    {getValue(stat.type)}
                  </span>

                  {stat.type === "experience" && (
                    <span className="mt-1 block text-xs text-gray-500">
                      years
                    </span>
                  )}
                </div>

                {/* Metric description */}
                <h3 className="mb-2 text-sm font-semibold text-gray-200 sm:text-base">
                  {stat.label}
                </h3>

                <p className="max-w-xs text-sm leading-6 text-gray-500">
                  {stat.description}
                </p>

                {/* Underline animation */}
                <div className="mt-6 h-px w-12 bg-white/10 transition-all duration-300 group-hover:w-20 group-hover:bg-purple-500/70" />
              </div>
            );
          })}
        </div>

        {/* Bottom divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-purple-500/30 via-white/10 to-transparent sm:mt-16" />
      </div>
    </section>
  );
}
