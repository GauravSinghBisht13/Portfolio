import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  introduction: {
    id: 1,
    name: "Gaurav Singh Bisht",
    title: {
      first: "Ex- Associate Software Developer",
      company: "@Thoughts2Binary",
    },
    intro: `Associate Software Engineer with 2 years of experience, full-stack web development using React.js, Next.js,
JavaScript, TypeScript, Node.js, Express.js, REST APIs, and SQL. Skilled in reusable component architecture, performance optimization, debugging, and API integration. Proven ability in end-to-end feature
delivery, code reviews, and mentoring, with growing expertise in AI-powered applications.`,
    location: "Open to all locations",
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
