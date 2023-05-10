import { createSlice } from "@reduxjs/toolkit";
import postActions from "../../actions/dispatched-actions/post/post-actions";

const initialState = {
    updateStatus: false,
    postToDeleteId: null
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        update: postActions.update,
        selectPostToDelete: postActions.selectPostToDelete,
        unSelectPostToDelete: postActions.unSelectPostToDelete,
        selectPostToEdit: postActions.selectPostToEdit,
        unSelectPostToEdit: postActions.unSelectPostToEdit
    }
});
export const { update, selectPostToDelete, unSelectPostToDelete, selectPostToEdit, unSelectPostToEdit } = postSlice.actions;
export default postSlice.reducer;