import { useEffect, useState } from "react";
import { Home, User, FileText, Image, Mail } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { GoDownload } from "react-icons/go";

import bgImage from "../assets/Profile.jpg";

export default function Hero() {
  const roles = ["@Thoughts2Binary"];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1),
        );

        if (!isDeleting && displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }

        if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <div className="h-screen w-full flex bg-[#020817]">
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center h-full pl-32 w-1/2">
        <div className="inline-block w-fit px-4 py-1 text-md tracking-widest text-blue-400 border border-blue-500 rounded-full mb-4">
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Gaurav Singh Bisht
        </h1>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-4 drop-shadow-lg  py-3 opacity-80">
          Software Developer{" "}
          <span className="text-blue-400">{displayText}</span>
        </h1>

        <span className="text-white text-2xl opacity-70">
          I build scalable and high-performance web applications using React,
          JavaScript, Node.js, and MongoDB. My focus is on creating clean,
          user-centric interfaces, integrating efficient APIs, and optimizing
          applications for real-world performance. I’m also exploring AI-powered
          solutions, leveraging LLM APIs to build smarter and more impactful
          applications.
        </span>

        <span className="text-white text-xl flex mt-5 opacity-70">
          <p className="flex px-2 py-2  gap-2">
            <FaLocationDot className="m-auto" />
            Gurugram, Haryana{" "}
          </p>
          <p className="flex px-2 py-2  gap-2">
            <MdOutlineEmail className="m-auto" />
            gvsingh999@gmail.com
          </p>
        </span>

        <span className="flex gap-4">
          <button
            onClick={() => scrollToSection("experience")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-3"
          >
            View Experience →
          </button>

          <a href="./Gaurav_Resume.pdf" download>
            <button className="mt-6 bg-gray-600 hover:bg-gray-700 px-8 py-4 rounded-full text-white text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-3">
              Download Resume
              <GoDownload />
            </button>
          </a>
        </span>

        {/* <p className="text-4xl text-gray-600 mb-6">
          I'm{" "}
          <span className="text-blue-500 border-r-2 border-blue-500 pr-1 animate-pulse">
            {displayText}
          </span>
        </p> */}

        <div className="flex gap-4 text-gray-600"></div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="w-1/2 h-full bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="h-full w-full "></div>
      </div>
    </div>
  );
}
