import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  project: [],
};

export const projectSlice = createSlice({
  name: "proj",
  initialState,
  reducers: {
    setProjectState(state, action) {
      state.project = [...state.project, action.payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.proj,
      };
    },
  },
});

export const { setProjectState } = projectSlice.actions;
export const selectProject = (state) => state.proj.project;
export default projectSlice.reducer;
