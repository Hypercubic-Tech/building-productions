import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  category: 2,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.authModal,
        };
      },
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
