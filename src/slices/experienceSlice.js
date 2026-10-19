import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experience: [
    {
      role: "High School (10th & 12th)",
      company: "Career Convent College",
      location: "Vikas Nagar, Lucknow",
      period: "2016 - 2019",
      description: [
        "Completed secondary and higher secondary education with strong academic foundation",
        "Focused on core subjects including Mathematics, Science, and Computer Studies",
      ],
    },
    {
      role: "Bachelor of Computer Applications (BCA)",
      company: "Shri Ramswaroop Memorial College of Engineering and Management",
      location: "Lucknow, India",
      period: "2019 - 2022",
      description: [
        "Studied computer science fundamentals including programming, databases, and web development",
        "Built academic projects applying Java, SQL, and web technologies",
      ],
    },
    {
      role: "Master of Computer Applications (MCA)",
      company: "IIMT College of Engineering",
      location: "Greater Noida, India",
      period: "2022 - 2024",
      description: [
        "Advanced coursework in software engineering, data structures, and full-stack development",
        "Specialized in modern frameworks including React.js, Node.js, and cloud-based applications",
        "Completed capstone projects integrating frontend, backend, and database systems",
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
    },

    {
      role: "Customer Support Executive",
      company: "Ienerziger",
      location: "Noida, India",
      period: "Oct 2024 - Feb 2025",
      description: [
        "Assisted customers with technical and account-related issues, troubleshooting problems and providing timely resolutions",
        "Collaborated with internal teams to escalate and resolve complex customer issues while maintaining service quality",
      ],
    },

    {
      role: "Software Developer",
      company: "Thoughts2Binary",
      location: "Gurugram, Haryana, India",
      period: "March 2025 - Aug 2026",
      description: [
        "Delivered 10+ frontend features across dashboards, sprint boards, task management, and embedded modules using React.js, Redux, and REST APIs, with emphasis on scalability and usability.",
        "Boosted performance by building 5+ reusable components, implementing lazy loading, optimized rendering, pagination, and reducing redundant API calls",
        "Resolved 300+ defects  during a React upgrade by migrating class components to Hooks, debugging complex issues, and mentoring junior developers.",
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
