import { configureStore } from "@reduxjs/toolkit";
import introductionReducer from "../slices/introSlice";
import experienceReducer from "../slices/experienceSlice";
import achivementReducer from "../slices/achivementSlice";
import skillReducer from "../slices/skillSlice";
import projectReducer from "../slices/projectSlice";
export const store = configureStore({
  reducer: {
    intro: introductionReducer,
    expe: experienceReducer,
    achiv: achivementReducer,
    skill: skillReducer,
    project: projectReducer,
  },
});
