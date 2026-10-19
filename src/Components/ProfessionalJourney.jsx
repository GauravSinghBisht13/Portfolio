import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import {
  FaRoute,
  FaPersonWalking,
  FaSuitcaseRolling,
  FaFlagCheckered,
  FaArrowDown,
  FaRocket,
  FaHourglassHalf,
} from "react-icons/fa6";
import Card from "./Card";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/* ------------------------------------------------------------------ */
/* Road layout                                                         */
/* ------------------------------------------------------------------ */
const VB_W = 1636;
const VB_H = 607;

const Y_HIGH = 150;
const Y_LOW = 460;
const START_X = 76;
const END_X = VB_W - 76;
const STOP_MIN_X = 440;
const STOP_MAX_X = 1180;
const DOT_R = 28;

const buildLayout = (n) => {
  const stops = Array.from({ length: n }, (_, i) => ({
    x:
      n === 1
        ? (STOP_MIN_X + STOP_MAX_X) / 2
        : STOP_MIN_X + ((STOP_MAX_X - STOP_MIN_X) * i) / (n - 1),
    y: i % 2 === 0 ? Y_HIGH : Y_LOW,
  }));

  const start = {
    x: START_X,
    y: stops[0].y === Y_HIGH ? Y_LOW : Y_HIGH,
  };

  const end = {
    x: END_X,
    y: stops[n - 1].y === Y_HIGH ? Y_LOW : Y_HIGH,
  };

  const points = [start, ...stops, end];

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    const mid = a.x + (b.x - a.x) * 0.55;
    const mid2 = a.x + (b.x - a.x) * 0.45;

    d += ` C ${mid} ${a.y}, ${mid2} ${b.y}, ${b.x} ${b.y}`;
  }

  const gap = n > 1 ? (STOP_MAX_X - STOP_MIN_X) / (n - 1) : 740;

  return { d, stops, start, end, gap };
};

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 900px)").matches
      : true,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = (e) => setIsDesktop(e.matches);

    setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);

    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
};

const Header = ({ activeIndex, totalStops }) => (
  <header className="relative z-10 shrink-0 px-5 pb-3 pt-6 sm:px-10 sm:pt-8 lg:px-16">
    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-purple-400 sm:text-xs">
      <FaRoute />
      My career, one milestone at a time
    </div>

    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
          Professional{" "}
          <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Journey.
          </span>
        </h2>

        <p className="mt-2 max-w-xl text-xs leading-relaxed text-gray-400 sm:text-sm">
          Every stop shaped the developer I am today. Scroll to follow the road.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
          <FaRoute />
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            Current stop
          </p>
          <p className="text-sm font-bold text-white">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="mx-1 text-gray-600">/</span>
            {String(totalStops).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  </header>
);

const StartLabel = () => (
  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-purple-400/30 bg-purple-500/[0.08] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-purple-200">
    <FaRocket className="text-purple-400" />
    Career journey starts here
  </span>
);

const EndLabel = () => (
  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-purple-400/30 bg-purple-500/[0.08] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-purple-200">
    More to come
    <FaHourglassHalf className="text-purple-400" />
  </span>
);

/* ---------- Mobile / tablet: simple vertical road ---------- */
const MobileJourney = ({ experience }) => {
  const total = experience.length;

  return (
    <section id="experience" className="relative w-full bg-[#050505] pb-16">
      <Header activeIndex={total - 1} totalStops={total} />

      <div className="relative mx-auto mt-4 max-w-xl px-5">
        <div className="absolute bottom-0 left-[29px] top-0 w-[3px] rounded-full bg-gradient-to-b from-purple-500/60 via-gray-700/40 to-purple-400/60" />

        <div className="relative mb-6 flex items-center gap-4">
          <span className="z-10 h-5 w-5 rounded-full bg-white ring-4 ring-purple-500/20" />
          <StartLabel />
        </div>

        {experience.map((item, index) => (
          <div key={index} className="relative mb-6 flex gap-4">
            <span className="z-10 ml-[5px] mt-5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-purple-200 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.35)]" />

            <div className="min-w-0 flex-1">
              <Card {...item} index={index} total={total} active />
            </div>
          </div>
        ))}

        <div className="relative flex items-center gap-4">
          <span className="z-10 h-5 w-5 rounded-full bg-white ring-4 ring-purple-500/20" />
          <EndLabel />
        </div>
      </div>
    </section>
  );
};

/* ---------- Desktop: winding road, scroll-driven ---------- */
const DesktopJourney = ({ experience }) => {
  const total = experience.length;
  const layout = useMemo(() => buildLayout(total), [total]);

  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [stopLengths, setStopLengths] = useState([]);
  const [traveler, setTraveler] = useState(layout.start);

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const len = path.getTotalLength();
    setPathLength(len);

    setStopLengths(
      layout.stops.map((stop) => {
        let lo = 0;
        let hi = len;

        for (let k = 0; k < 28; k++) {
          const mid = (lo + hi) / 2;

          if (path.getPointAtLength(mid).x < stop.x) lo = mid;
          else hi = mid;
        }

        return (lo + hi) / 2;
      }),
    );
  }, [layout]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frameId = null;

    const update = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const distance = section.offsetHeight - window.innerHeight;

        setProgress(distance > 0 ? clamp(-rect.top / distance, 0, 1) : 0);
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

  useEffect(() => {
    const path = pathRef.current;
    if (!path || !pathLength) return;

    const p = path.getPointAtLength(pathLength * progress);
    setTraveler({ x: p.x, y: p.y });
  }, [progress, pathLength]);

  const travelled = pathLength * progress;

  const reachedIndex = stopLengths.reduce(
    (acc, len, i) => (travelled >= len - 8 ? i : acc),
    -1,
  );

  const activeIndex = Math.max(reachedIndex, 0);
  const finished = progress > 0.98;

  const pct = (x, y) => ({
    left: `${(x / VB_W) * 100}%`,
    top: `${(y / VB_H) * 100}%`,
  });

  const cardWidth = `clamp(210px, ${(((2 * layout.gap) / VB_W) * 100 - 1.5).toFixed(1)}%, 340px)`;

  const startBelow = layout.start.y > VB_H / 2;
  const endBelow = layout.end.y > VB_H / 2;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-[#050505]"
      style={{ height: `${(total + 1) * 80}vh` }}
    >
      <div className="sticky top-0 flex h-screen min-h-[620px] w-full flex-col overflow-hidden bg-[#050505] text-white">
        {/* Subtle purple ambient lighting */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-purple-600/[0.06] blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-violet-500/[0.05] blur-[120px]" />

        <Header activeIndex={activeIndex} totalStops={total} />

        {/* Canvas */}
        <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-6 lg:px-12">
          <div
            className="relative w-full max-w-[1400px]"
            style={{ aspectRatio: `${VB_W} / ${VB_H}`, maxHeight: "100%" }}
          >
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              {/* Faint full road */}
              <path
                ref={pathRef}
                d={layout.d}
                fill="none"
                stroke="#a1a1aa"
                strokeOpacity="0.22"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Travelled part of the road */}
              {pathLength > 0 && (
                <path
                  d={layout.d}
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={pathLength}
                  strokeDashoffset={pathLength * (1 - progress)}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(168,85,247,0.55))",
                  }}
                />
              )}

              {/* Start / end dots */}
              <circle
                cx={layout.start.x}
                cy={layout.start.y}
                r={DOT_R}
                fill="#ffffff"
              />

              <circle
                cx={layout.end.x}
                cy={layout.end.y}
                r={DOT_R}
                fill={finished ? "#a855f7" : "#ffffff"}
                style={{ transition: "fill 300ms" }}
              />

              {/* Stop markers */}
              {layout.stops.map((s, i) => (
                <g key={i}>
                  {i === activeIndex && reachedIndex >= 0 && (
                    <circle
                      cx={s.x}
                      cy={s.y}
                      r="26"
                      fill="#a855f7"
                      opacity="0.22"
                    />
                  )}

                  <circle
                    cx={s.x}
                    cy={s.y}
                    r="11"
                    fill={i <= reachedIndex ? "#a855f7" : "#171717"}
                    stroke={i <= reachedIndex ? "#d8b4fe" : "#71717a"}
                    strokeWidth="4"
                  />
                </g>
              ))}
            </svg>

            {/* Start label */}
            <div
              className="absolute z-20"
              style={{
                left: `${((layout.start.x - DOT_R) / VB_W) * 100}%`,
                top: `${((layout.start.y + (startBelow ? DOT_R + 16 : -(DOT_R + 16))) / VB_H) * 100}%`,
                transform: startBelow ? "none" : "translateY(-100%)",
              }}
            >
              <StartLabel />
            </div>

            {/* End label */}
            <div
              className="absolute z-20"
              style={{
                right: `${((VB_W - (layout.end.x + DOT_R)) / VB_W) * 100}%`,
                top: `${((layout.end.y + (endBelow ? DOT_R + 16 : -(DOT_R + 16))) / VB_H) * 100}%`,
                transform: endBelow ? "none" : "translateY(-100%)",
              }}
            >
              <EndLabel />
            </div>

            {/* Cards next to the bends */}
            {layout.stops.map((s, i) => {
              const below = s.y === Y_HIGH;
              const visible = i <= reachedIndex;
              const isActive = i === activeIndex;

              return (
                <div
                  key={i}
                  className="absolute z-20 transition-all duration-500 ease-out"
                  style={{
                    width: cardWidth,
                    left: `${(s.x / VB_W) * 100}%`,
                    top: `${(s.y / VB_H) * 100}%`,
                    transform: `translate(-50%, ${
                      below ? "34px" : "calc(-100% - 34px)"
                    }) scale(${visible ? (isActive ? 1 : 0.96) : 0.92})`,
                    opacity: visible ? (isActive ? 1 : 0.6) : 0,
                    pointerEvents: visible ? "auto" : "none",
                  }}
                  aria-hidden={!visible}
                >
                  <Card
                    {...experience[i]}
                    index={i}
                    total={total}
                    active={isActive}
                  />
                </div>
              );
            })}

            {/* Walking traveler */}
            <div
              className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-[85%]"
              style={pct(traveler.x, traveler.y)}
              aria-label="Traveler carrying a suitcase"
            >
              <div className="relative flex items-end gap-0.5">
                <span className="absolute inset-0 scale-150 rounded-full bg-purple-400/20 blur-lg" />

                <FaPersonWalking className="relative text-3xl text-purple-200 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]" />

                <FaSuitcaseRolling className="relative -mb-1 text-base text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer status */}
        <div className="relative z-10 shrink-0 px-6 pb-5 pt-1 lg:px-12">
          <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 text-xs">
            <span className="flex items-center gap-2 text-gray-500">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              Career journey starts here
            </span>

            <span className="flex items-center gap-2 font-medium text-purple-300">
              {finished ? (
                <>
                  <FaFlagCheckered />
                  Latest destination reached — more to come
                </>
              ) : (
                <>
                  Keep scrolling
                  <FaArrowDown className="animate-bounce" />
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfessionalJourney = () => {
  const experience = useSelector((state) => state.expe.experience) || [];
  const isDesktop = useIsDesktop();

  if (experience.length === 0) {
    return (
      <section
        id="experience"
        className="flex min-h-[50vh] items-center justify-center bg-[#050505] px-6 text-gray-400"
      >
        No experience details available yet.
      </section>
    );
  }

  return isDesktop ? (
    <DesktopJourney experience={experience} />
  ) : (
    <MobileJourney experience={experience} />
  );
};

export default ProfessionalJourney;
