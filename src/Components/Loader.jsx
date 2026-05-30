import React, { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500); // small delay
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#020817] flex flex-col items-center justify-center text-white z-50">
      {/* Logo */}
      <h1 className="text-6xl font-bold mb-4">GS</h1>

      {/* Text */}
      <p className="text-lg opacity-70 mb-6 tracking-widest">
        INITIATING PORTFOLIO...
      </p>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="mt-3 text-sm opacity-60">{progress}%</p>
    </div>
  );
};

export default Loader;
