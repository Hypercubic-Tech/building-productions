import { createSlice } from '@reduxjs/toolkit';

const userStatusSlice = createSlice({
    name: 'userStatus',
    initialState: {
        username: '',
        p_title: '',
        allowed_projects: "",
        allowed_products: "",
        allowed_export: "",
        allowed_media: ""
    },
    reducers: {
        setUserStatus: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { setUserStatus } = userStatusSlice.actions;
export default userStatusSlice.reducer;
