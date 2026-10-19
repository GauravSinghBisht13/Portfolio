import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const CARD_TOP = 40; // px gap between the heading and the cards
const RING_GAP = 14; // px between card bottoms and the curve line
const CARD_GAP = 64; // px of clear space between neighbouring cards (desktop)

const getViewport = () =>
  typeof window !== "undefined"
    ? { w: window.innerWidth, h: window.innerHeight }
    : { w: 1440, h: 800 };

const Projects = () => {
  const project = useSelector((state) => state.project.project) || [];
  const total = project.length;

  const sectionRef = useRef(null);
  const [pos, setPos] = useState(0); // fractional index of the card in focus
  const [viewport, setViewport] = useState(getViewport);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frameId = null;

    const update = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const distance = section.offsetHeight - window.innerHeight;
        const progress = distance > 0 ? clamp(-rect.top / distance, 0, 1) : 0;

        setPos(total > 1 ? progress * (total - 1) : 0);
        setViewport(getViewport());
        frameId = null;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [total]);

  const scrollToIndex = (index) => {
    const section = sectionRef.current;
    if (!section || total <= 1) return;

    const top = window.scrollY + section.getBoundingClientRect().top;
    const distance = section.offsetHeight - window.innerHeight;

    window.scrollTo({
      top: top + (index / (total - 1)) * distance,
      behavior: "smooth",
    });
  };

  if (total === 0) {
    return (
      <section
        id="projects"
        className="flex min-h-[40vh] items-center justify-center bg-[#050505] text-gray-400"
      >
        No projects available yet.
      </section>
    );
  }

  /* ---------- Sizing (everything derives from the viewport) ---------- */
  const isMobile = viewport.w < 640;
  const vh = Math.max(viewport.h, 640);

  // Use all the vertical room the stage has (heading + footer subtracted).
  const cardH = clamp(vh - 275, 420, 600);

  // Three cards must fit side by side with gaps.
  const widthForThree = (viewport.w - 64 - CARD_GAP * 2) / 3;
  const cardW = isMobile
    ? Math.min(viewport.w * 0.78, cardH * 0.74)
    : clamp(Math.min(cardH * 0.78, widthForThree), 280, 460);

  // Distance between card centres, then the angle that produces it.
  const spacing = isMobile ? cardW * 0.88 : cardW + CARD_GAP;
  const radius = isMobile ? 560 : 700;
  const angleRad = Math.asin(clamp(spacing / (radius + cardH), 0, 0.95));
  const angleStep = (angleRad * 180) / Math.PI;

  const activeIndex = Math.round(pos);
  const ringRadius = radius + RING_GAP;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-[#050505]"
      style={{ height: `${100 + Math.max(total - 1, 0) * 70}vh` }}
    >
      <div className="sticky top-0 flex h-screen min-h-[640px] w-full flex-col overflow-hidden bg-[#050505] text-white">
        {/* Subtle purple ambient glows */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-purple-600/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-purple-500/[0.06] blur-[130px]" />

        {/* Heading — left aligned */}
        <header className="relative z-10 shrink-0 px-5 pt-10 sm:px-8 sm:pt-12 md:px-12 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-[1800px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-purple-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400 sm:text-sm">
                Selected work
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Projects <span className="text-purple-400">Gallery.</span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              A few things I have built. Scroll to browse through them.
            </p>
          </div>
        </header>

        {/* Fan stage */}
        <div className="relative z-10 min-h-0 flex-1">
          {/* Small curved line under the active card (faded at both ends) */}
          <div
            className="pointer-events-none absolute left-1/2"
            style={{
              top: CARD_TOP + cardH + RING_GAP,
              width: ringRadius * 2,
              height: ringRadius * 2,
              transform: "translateX(-50%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 18%, black 38%, black 62%, transparent 82%)",
              maskImage:
                "linear-gradient(to right, transparent 18%, black 38%, black 62%, transparent 82%)",
            }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-purple-300/40" />
          </div>

          {/* Marker where the active card touches the curve */}
          <div
            className="pointer-events-none absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_14px_rgba(192,132,252,0.9)]"
            style={{ top: CARD_TOP + cardH + RING_GAP }}
          />

          {project.map((item, index) => {
            const offset = index - pos;
            const abs = Math.abs(offset);
            const isActive = index === activeIndex;

            const blur = Math.min(abs, 1.5) * 3;
            const brightness = 1 - Math.min(abs, 1) * 0.3;

            // Centre + one neighbour each side stay visible; the rest fade out.
            const opacity =
              abs <= 1
                ? 1 - abs * 0.12
                : clamp(0.88 * (1 - (abs - 1) / 0.7), 0, 0.88);

            return (
              <div
                key={index}
                className="absolute motion-reduce:transition-none"
                style={{
                  top: CARD_TOP,
                  height: cardH,
                  width: cardW,
                  left: `calc(50% - ${cardW / 2}px)`,
                  transformOrigin: `50% calc(100% + ${radius}px)`,
                  transform: `rotate(${offset * angleStep}deg)`,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                  opacity,
                  zIndex: 100 - Math.round(abs * 10),
                  pointerEvents: abs > 1.6 ? "none" : "auto",
                  transition:
                    "transform 150ms ease-out, filter 150ms ease-out, opacity 150ms ease-out",
                  willChange: "transform, filter",
                  cursor: isActive ? "default" : "pointer",
                }}
                aria-hidden={!isActive}
                onClick={() => !isActive && scrollToIndex(index)}
              >
                <div
                  className={`h-full ${isActive ? "" : "pointer-events-none"}`}
                >
                  <ProjectCard data={item} index={index} active={isActive} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Counter + dots */}
        <footer className="relative z-10 flex shrink-0 flex-col items-center gap-2.5 px-6 pb-5 pt-2">
          <div className="flex items-center gap-2">
            {project.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to project ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-purple-400"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="mx-2 text-gray-600">/</span>
            {String(total).padStart(2, "0")}
            <span className="ml-4 text-gray-500">Scroll to rotate</span>
          </p>
        </footer>

        {/* Bottom divider, same as the numbers section */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-purple-500/30 via-white/10 to-transparent" />
      </div>
    </section>
  );
};

export default Projects;
