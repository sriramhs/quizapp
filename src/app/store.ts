// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import studentDetailsReducer, { StudentDetails} from "../features/Quizapp/studentDetailsSlice";

export const store = configureStore({
  reducer: {
    studentDetails: studentDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
