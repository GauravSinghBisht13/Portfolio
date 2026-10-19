import { createSlice } from "@reduxjs/toolkit";

import {
  FaCode,
  FaBrain,
  FaDatabase,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaAws,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaUsers,
  FaComments,
  FaSyncAlt,
  FaSearch,
  FaLightbulb,
  FaDocker,
  FaServer,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiRedux,
  SiPython,
  SiNumpy,
  SiPandas,
  SiJest,
} from "react-icons/si";

import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";
import { MdPsychology, MdOutlinePsychology } from "react-icons/md";
import { VscVscodeInsiders } from "react-icons/vsc";

const initialState = {
  skill: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: IoCodeSlash,
      color: "#c084fc",
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: RiTailwindCssFill },
        { name: "Bootstrap", icon: FaBootstrap },
        { name: "Next.js", icon: RiNextjsLine },
        { name: "Redux Toolkit", icon: SiRedux },
      ],
    },

    {
      id: "backend",
      title: "Backend & Databases",
      icon: FaDatabase,
      color: "#a78bfa",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: FaServer },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },

    {
      id: "ai",
      title: "AI & Data",
      icon: FaBrain,
      color: "#e879f9",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "NumPy", icon: SiNumpy },
        { name: "Pandas", icon: SiPandas },
        { name: "OpenAI APIs", icon: FaBrain },
        { name: "Gemini APIs", icon: FaBrain },
        { name: "Prompt Engineering", icon: MdPsychology },
        { name: "AI/ML Fundamentals", icon: FaBrain },
      ],
    },

    {
      id: "tools",
      title: "Tools & Cloud",
      icon: FaCode,
      color: "#818cf8",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "AWS (Basic)", icon: FaAws },
        { name: "Docker (Basic)", icon: FaDocker },
        { name: "VS Code", icon: VscVscodeInsiders },
        { name: "Jest", icon: SiJest },
      ],
    },

    {
      id: "soft",
      title: "Professional Skills",
      icon: FaUsers,
      color: "#c084fc",
      skills: [
        { name: "Quick Learner", icon: MdOutlinePsychology },
        { name: "Problem Solving", icon: FaLightbulb },
        { name: "Team Collaboration", icon: FaUsers },
        { name: "Communication", icon: FaComments },
        { name: "Adaptability", icon: FaSyncAlt },
        { name: "Attention to Detail", icon: FaSearch },
        { name: "Analytical Thinking", icon: FaBrain },
      ],
    },
  ],
};

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
