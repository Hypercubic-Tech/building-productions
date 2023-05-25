import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  project: [],
  image: []
};

export const projectSlice = createSlice({
  name: "proj",
  initialState,
  reducers: {
    setProjectState(state, action) {
      state.project = [...state.project, action.payload];
    },
    setProjectImage(state, action) {
      state.image = [...state.image, ...action.payload];
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

export const { setProjectState, setProjectImage } = projectSlice.actions;
export const selectProject = (state) => state.proj.project;
export const selectProjectImage = (state) => state.proj.image;
export default projectSlice.reducer;
