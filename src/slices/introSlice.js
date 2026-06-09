import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  introduction: {
    id: 1,
    name: "Gaurav Singh Bisht",
    title: {
      first: "Software Developer",
      company: "@Thoughts2Binary",
    },
    intro: `I build scalable and high-performance web applications using React,
          JavaScript, Node.js, and MongoDB. My focus is on creating clean,
          user-centric interfaces, integrating efficient APIs, and optimizing
          applications for real-world performance. I’m also exploring AI-powered
          solutions, leveraging LLM APIs to build smarter and more impactful
          applications.`,
    location: "Gurugram, Haryana",
    email: "gvsingh999@gmail.com",
  },
};

export const introSlice = createSlice({
  name: "introduction",
  initialState,
  reducers: {},
});

// export const { addTodo, removeTodo } = introSlice.actions;

export default introSlice.reducer;
