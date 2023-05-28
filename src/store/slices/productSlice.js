import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    product: [],
};

export const productSlice = createSlice({
    name: "prod",
    initialState,
    reducers: {
        setProductState(state, action) {
            state.product = action.payload;
        },
        deleteProductState(state, action) {
            state.product = state.product.filter(
                (product) => product.id !== action.payload
            );
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.prod,
            };
        },
    },
});

export const { setProductState, deleteProductState } = productSlice.actions;
export default productSlice.reducer;
