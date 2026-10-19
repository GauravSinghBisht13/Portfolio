import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { useSelector } from "react-redux";

import bgImage from "../assets/Profile2.png";

export default function Hero() {
  const introduction = useSelector((state) => state.intro.introduction);

  const roles = [introduction.title.company];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];

    if (!currentWord) return;

    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? currentWord.substring(0, prev.length - 1)
              : currentWord.substring(0, prev.length + 1),
          );
        },
        isDeleting ? 45 : 90,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050505] text-white lg:flex-row"
    >
      {/* Subtle purple ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-600/[0.07] blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/[0.06] blur-[140px]" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 order-1 flex w-full min-w-0 flex-col justify-center px-5 pb-8 pt-10 sm:px-8 sm:pt-12 md:px-12 lg:w-1/2 lg:px-10 lg:py-16 xl:px-16 2xl:px-24">
        {/* Availability badge */}
        <div className="mb-5 inline-flex max-w-full items-center gap-2 self-start rounded-full border border-purple-500/25 bg-purple-500/[0.06] px-3 py-2 text-[10px] font-semibold tracking-wide text-purple-300 sm:text-xs sm:tracking-wider">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
          </span>
          ACTIVELY SEEKING NEW OPPORTUNITIES
        </div>

        {/* Name */}
        <h1 className="mb-3 break-words text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
          {introduction.name}
        </h1>

        {/* Animated title */}
        <h2 className="mb-4 flex min-w-0 flex-wrap items-center gap-x-2 py-1 text-lg font-light leading-snug text-gray-300 sm:text-xl md:text-2xl xl:text-3xl">
          <span>{introduction.title.first}</span>

          <span className="min-w-0 break-words font-semibold text-purple-400">
            {displayText}
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-purple-400 align-middle sm:h-6" />
          </span>
        </h2>

        {/* Profile image - mobile/tablet */}
        <div className="my-4 flex h-[240px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] sm:my-5 sm:h-[330px] md:h-[390px] lg:hidden">
          <img
            src={bgImage}
            alt="Profile portrait"
            className="h-full w-full object-contain object-center"
          />
        </div>

        {/* Introduction */}
        <p className="max-w-2xl break-words text-sm leading-7 text-gray-400 sm:text-base md:text-lg xl:text-xl">
          {introduction.intro}
        </p>

        {/* Location and email */}
        <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:text-base">
          <p className="flex min-w-0 items-start gap-2">
            <FaLocationDot className="mt-1 shrink-0 text-purple-400" />
            <span className="break-words">{introduction.location}</span>
          </p>

          <p className="flex min-w-0 items-start gap-2">
            <MdOutlineEmail className="mt-1 shrink-0 text-purple-400" />
            <span className="break-all">{introduction.email}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            onClick={() => scrollToSection("experience")}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-purple-500/20 sm:w-auto sm:text-base"
          >
            View Experience
            <span aria-hidden="true">→</span>
          </button>

          <a href="/Bisht_Gaurav_AI.pdf" download className="w-full sm:w-auto">
            <span className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-500/[0.08] sm:text-base">
              Download Resume
              <GoDownload className="text-purple-400" />
            </span>
          </a>
        </div>

        {/* Bottom accent */}
        <div className="mt-9 h-px w-full max-w-sm bg-gradient-to-r from-purple-500/50 via-purple-500/15 to-transparent" />
      </div>

      {/* Profile image - desktop */}
      <div className="relative order-2 hidden h-screen w-1/2 shrink-0 lg:sticky lg:top-0 lg:block">
        <img
          src={bgImage}
          alt="Profile portrait"
          className="h-full w-full object-cover object-right"
        />

        {/* Black gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-[#050505]/20" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />

        {/* Subtle purple corner accent */}
        <div className="pointer-events-none absolute bottom-10 right-10 h-24 w-24 rounded-full border border-purple-400/20" />
      </div>
    </section>
  );
}
