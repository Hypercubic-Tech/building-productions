import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  project: [],
  image: [],
  searchType: ''
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
    setSearchValue(state, action) {
      state.searchType = action.payload;
    }
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

export const { setProjectState, setProjectImage, setSearchValue } = projectSlice.actions;
// export const selectProject = (state) => state.proj.project;
// export const selectProjectImage = (state) => state.proj.image;
// export const selectSearchValue = (state) => state.proj.searchType;
export default projectSlice.reducer;
