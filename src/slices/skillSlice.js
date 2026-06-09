import { createSlice } from "@reduxjs/toolkit";
//logos
import { IoLogoJavascript } from "react-icons/io5";
import { IoTerminalOutline, IoTerminalSharp } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa6";
import {
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";
import { FaHtml5, FaCss, FaNode } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";
import { MdPsychology } from "react-icons/md";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  FaUsers,
  FaComments,
  FaSyncAlt,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";

const initialState = {
  skill: [
    {
      title: "Frontend Engineering",
      icon: IoCodeSlash,
      skills: [
        { name: "React.js", icon: FaReact, color: "blue" },
        { name: "JavaScript", icon: IoLogoJavascript, color: "yellow" },
        { name: "HTML5", icon: FaHtml5, color: "orange" },
        { name: "CSS", icon: FaCss, color: "yellow" },
        { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "blue" },
        { name: "Bootstrap", icon: FaBootstrap, color: "purple" },
        { name: "Next.Js", icon: RiNextjsLine, color: "pink" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: FaDatabase,
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "green" },
        { name: "Express.js", icon: SiExpress, color: "gray" },
        { name: "MongoDB", icon: SiMongodb, color: "green" },
        { name: "MySQL", icon: SiMysql, color: "blue" },
      ],
    },
    {
      title: "AI & Developer Tools",
      icon: FaBrain,
      skills: [
        { name: "Prompt Engineering", icon: MdPsychology, color: "purple" },
        { name: "OpenAI APIs", icon: SiOpenai, color: "black" },
        { name: "Gemini APIs", icon: SiGooglegemini, color: "blue" },
        { name: "Git", icon: FaGitAlt, color: "orange" },
        { name: "AWS (Basic)", icon: FaAws, color: "yellow" },
        { name: "VS Code", icon: VscVscodeInsiders, color: "blue" },
      ],
    },

    {
      title: "Soft Skills",
      icon: FaBrain,
      skills: [
        { name: "Quick Learner", icon: MdOutlinePsychology, color: "purple" },
        { name: "Problem Solving", icon: FaLightbulb, color: "yellow" },
        { name: "Team Collaboration", icon: FaUsers, color: "blue" },
        { name: "Effective Communication", icon: FaComments, color: "green" },
        { name: "Adaptability", icon: FaSyncAlt, color: "orange" },
        { name: "Attention to Detail", icon: FaSearch, color: "pink" },
        { name: "Analytical Thinking", icon: FaBrain, color: "purple" },
      ],
    },
  ],
};

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
