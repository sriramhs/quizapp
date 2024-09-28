// src/features/studentDetails/studentDetailsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StudentDetails {
  name: string;
  email: string;
  phone: string;
  language: string;
  done:boolean[];
  right:boolean[];
  page:number;
}

const initialState: StudentDetails = {
  name: "",
  email: "",
  phone: "",
  language: "",
  done:[false,false,false,false,false],
  right:[false,false,false,false,false],
  page:0
};

const studentDetailsSlice = createSlice({
  name: "studentDetails",
  initialState,
  reducers: {
    setStudentDetails: (state, action: PayloadAction<Partial<StudentDetails>>) => {
      Object.assign(state, action.payload);
    },

    setDone:(state,action:PayloadAction<boolean[]>)=>{
      state.done=action.payload
    },
    setRight:(state,action:PayloadAction<boolean[]>)=>{
      state.right=action.payload
    },

    setPage:(state,action:PayloadAction<number>)=>{
      state.page=action.payload
    }

    
  },
});

export const { setStudentDetails,setDone,setRight,setPage} = studentDetailsSlice.actions;

export default studentDetailsSlice.reducer;
