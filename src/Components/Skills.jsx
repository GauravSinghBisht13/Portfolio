import React from "react";
import SkillCard from "./SkillCard";
import { IoTerminalOutline, IoTerminalSharp } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa6";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Engineering",
      icon: IoCodeSlash,
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
        "Next.Js",
      ],
    },
    {
      title: "Backend & Databases",
      icon: FaDatabase,
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      title: "AI & Developer Tools",
      icon: FaBrain,
      skills: [
        "Prompt Engineering",
        "OpenAI APIs",
        "Gemini APIs",
        "Git",
        "AWS (Basic)",
        "VS Code",
      ],
    },

    {
      title: "Soft Skills",
      icon: FaBrain,
      skills: [
        "Quick Learner",
        "Problem Solving",
        "Team Collaboration",
        "Effective Communication",
        "Adaptability",
        "Attention to Detail",
        "Analytical Thinking",
      ],
    },
  ];
  return (
    <>
      <section id="skills">
        <div className="py-20">
          <h1 className="text-5xl font-bold text-white my-8 w-3/4 m-auto gap-2">
            Technical Arsenal
            <p className="border-b-blue-400 border-b-4 w-60  mt-4 "></p>
          </h1>

          <div className="grid grid-cols-2 gap-8 mt-20 w-[85%] m-auto">
            {skillsData.map((item, index) => (
              <SkillCard key={index} item={item} icon={item.icon} />
            ))}
          </div>

          <div className="mt-30 flex w-[80%] m-auto">
            <div className="education text-white w-1/2 px-5 py-5">
              <h1 className="text-5xl flex gap-5 py-10">
                <PiGraduationCapFill className="text-blue-400 " />
                Education
              </h1>

              <div className=" list-disc marker:text-blue-400 text-xl ">
                <li className="ml-5"></li>
                <div className="border-l-3 border-white/10 px-4 ">
                  <h2 className="text-2xl font-bold">
                    IIMT College of Engineering, Greater Noida
                  </h2>
                  <h3 className="text-blue-400 font-bold opacity-60">
                    Master's of Computer Application
                  </h3>
                  <h4 className="flex gap-3 text-xl m-auto  mt-3 opacity-60">
                    <BsCalendarDateFill className=" text-2xl " /> 2022 - 2024
                  </h4>
                </div>
                <li className="ml-5"></li>
                <div className="border-l-3 border-white/10 px-4 ">
                  <h2 className="text-2xl font-bold">
                    Shri RamSwaroop Memorial College of Engineering and
                    Management, Lucknow
                  </h2>
                  <h3 className="text-blue-400 font-bold opacity-60">
                    Bachelor's of Computer Application
                  </h3>
                  <h4 className="flex gap-3 text-xl m-auto  mt-3 opacity-60">
                    <BsCalendarDateFill className=" text-2xl " /> 2019 - 2022
                  </h4>
                </div>

                <li className="ml-5"></li>
                <div className="border-l-3 border-white/10 px-4 ">
                  <h2 className="text-2xl font-bold">
                    Career Convent College, Lucknow
                  </h2>
                  <h3 className="text-blue-400 font-bold opacity-60">
                    Class X and XII
                  </h3>
                  <h4 className="flex gap-3 text-xl m-auto  mt-3 opacity-60">
                    <BsCalendarDateFill className=" text-2xl " /> 2016 - 2019
                  </h4>
                </div>
              </div>
            </div>

            <div className="certificates text-white w-1/2 px-5 py-5">
              <h1 className="text-5xl flex gap-5 py-10">
                <SlBadge className="text-blue-400" />
                Certifications
              </h1>

              <div className="mt-20 ">
                <div className="cercard border-1 border-white/10 bg-white/5 rounded-xl px-5 py-4 mb-5 hover:bg-white/10">
                  <h1 className="flex gap-5 text-xl">
                    <FaCertificate className="text-3xl text-blue-400" /> SQL
                    Basics, HackerRank{" "}
                  </h1>
                </div>

                <div className="cercard border-1 border-white/10 bg-white/5 rounded-xl px-5 py-4 flex mb-5 hover:bg-white/10">
                  <h1 className="flex gap-5 text-xl">
                    <FaCertificate className="text-3xl text-blue-400" />
                    Full Stack Web Development, Udemy{" "}
                  </h1>
                </div>

                <div className="cercard border-1 border-white/10 bg-white/5 rounded-xl px-5 py-4 flex mb-5 hover:bg-white/10">
                  <h1 className="flex gap-5 text-xl">
                    <FaCertificate className="text-3xl text-blue-400" />
                    Cyber Security, Cisco{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b-1 border-white/10"></div>
    </>
  );
};

export default Skills;
