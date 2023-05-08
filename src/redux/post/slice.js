import { createSlice } from "@reduxjs/toolkit";
import postActions from "../../actions/dispatched-actions/post/post-actions";

const initialState = {
    updateStatus: false
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        update: postActions.update
    }
});
export const { update } = postSlice.actions;
export default postSlice.reducer;