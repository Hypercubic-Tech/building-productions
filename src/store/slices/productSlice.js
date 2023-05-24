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
            state.product = [...state.product, action.payload];
        },
        deleteProductState(state, action) {
            console.log(state, 'state')
            console.log(action, 'action')
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
export const selectProduct = (state) => state.prod.product;
export default productSlice.reducer;
