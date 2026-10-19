import React, { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500);
          return 100;
        }

        return Math.min(prev + 5, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50 px-5">
      {/* Logo */}
      <h1
        className="text-6xl sm:text-7xl font-bold tracking-wider mb-5
          text-purple-500
          drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]"
      >
        GS<span className="text-white">.</span>
      </h1>

      {/* Loading Text */}
      <p className="text-xs sm:text-sm text-gray-400 mb-7 tracking-[0.35em]">
        INITIATING PORTFOLIO
        <span className="text-purple-500 animate-pulse">...</span>
      </p>

      {/* Progress Bar */}
      <div className="w-64 sm:w-80 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-purple-500
            shadow-[0_0_15px_rgba(168,85,247,0.8)]
            transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="flex justify-between w-64 sm:w-80 mt-3">
        <p className="text-[10px] tracking-[0.2em] text-gray-600">LOADING</p>

        <p className="text-xs font-medium text-purple-400 tabular-nums">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default Loader;
