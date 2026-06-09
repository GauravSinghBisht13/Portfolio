import { createSlice } from "@reduxjs/toolkit";
import { FaTrophy } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";

const initialState = {
  achivement: [
    {
      title: "Star Performer (2025)",
      icon: FaTrophy,
      description:
        "Recognized as a Star Performer for delivering high-quality work, resolving critical issues, and contributing to team productivity.",
    },
    {
      title: "High-Impact Bug Resolution",
      icon: FaBug,
      description:
        "Resolved 300+ bugs across staging and production, improving application stability and overall user experience.",
    },
    {
      title: "Scalable Frontend Development",
      icon: FaReact,
      description:
        "Developed and maintained scalable React applications with reusable components and optimized state management.",
    },
  ],
};

export const achivementSlice = createSlice({
  name: "achivements",
  initialState,
  reducers: {},
});

export default achivementSlice.reducer;
