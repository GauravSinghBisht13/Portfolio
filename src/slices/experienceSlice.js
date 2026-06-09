import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experience: [
    {
      role: "Software Developer",
      company: "Thoughts2Binary",
      location: "Gurugram, Haryana, India",
      period: "March 2025 - Present",
      description: [
        "Specialize in developing and maintaining scalable web applications using JavaScript, React, and Node.js, ensuring high performance and seamless user experiences.",
        "Designed and implemented reusable components, optimized data flow, and efficient state management to build clean, maintainable, and production-ready systems.",
        "Resolved 300+ bugs across staging and production environments, improving application stability, performance, and overall user experience.",
        "Collaborated with cross-functional teams to integrate APIs, streamline workflows, and deliver reliable, end-to-end solutions aligned with business requirements.",
      ],
      highlights: [
        "Performance Optimization",
        "High-Impact Bug Fixing (300+)",
        "Reusable Component Architecture",
        "Production Stability Improvements",
      ],
    },

    {
      role: "Trainee React.js & Node.js",
      company: "NetCoreinfo Business Group",
      location: "Noida, India",
      period: "Sept 2023 - Dec 2023",
      description: [
        "Built responsive web applications using React.js with focus on reusable components and state management",
        "Developed RESTful APIs using Node.js and Express.js for backend operations",
        "Integrated frontend and backend systems to enable seamless data flow and functionality",
      ],
      highlights: [
        "End-to-End Application Development",
        "RESTful API Design & Integration",
        "Scalable Component Architecture",
        "Efficient State Management",
      ],
    },
  ],
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
});

// export const { addTodo, removeTodo } = introSlice.actions;

export default experienceSlice.reducer;
