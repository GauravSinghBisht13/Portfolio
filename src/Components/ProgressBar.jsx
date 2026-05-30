import React, { useEffect, useRef, useState } from "react";

function ProgressBar() {
  const [exp, setExp] = useState(0);
  const [bugs, setBugs] = useState(0);
  const [start, setStart] = useState(false);

  const sectionRef = useRef(null);

  // 👇 Detect when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Run animation only when visible
  useEffect(() => {
    if (!start) return;

    let expVal = 0;
    let bugsVal = 0;

    const expInterval = setInterval(() => {
      expVal += 0.1;
      if (expVal >= 1.5) {
        expVal = 1.5;
        clearInterval(expInterval);
      }
      setExp(expVal);
    }, 100);

    const bugsInterval = setInterval(() => {
      bugsVal += 10;
      if (bugsVal >= 250) {
        bugsVal = 250;
        clearInterval(bugsInterval);
      }
      setBugs(bugsVal);
    }, 50);

    return () => {
      clearInterval(expInterval);
      clearInterval(bugsInterval);
    };
  }, [start]);

  return (
    <div
      ref={sectionRef}
      className="bg-white/5 backdrop-blur-md text-white py-10  "
    >
      <div className="flex w-[80%] justify-around m-auto">
        <div>
          <h1 className="text-4xl font-bold text-center">{exp.toFixed(1)}y+</h1>
          <p className="mt-3 opacity-60 text-center">EXPERIENCE</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-center">{bugs}+</h1>
          <p className="mt-3 opacity-60 text-center">BUGS RESOLVED</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-center">React</h1>
          <p className="mt-3 opacity-60 text-center">SPECIALIZATION</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-center">Web</h1>
          <p className="mt-3 opacity-60 text-center">FOCUS</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
