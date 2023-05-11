import { createSlice } from "@reduxjs/toolkit";
import postActions from "../../actions/dispatched-actions/post/post-actions";

const initialState = {
    updateStatus: false,
    postToDeleteId: null,
    postToEdit: null,
    url: "https://dev.codeleap.co.uk/careers/?limit=15"
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        update: postActions.update,
        selectPostToDelete: postActions.selectPostToDelete,
        unSelectPostToDelete: postActions.unSelectPostToDelete,
        selectPostToEdit: postActions.selectPostToEdit,
        unSelectPostToEdit: postActions.unSelectPostToEdit,
        updateUrlGetPosts: postActions.updateUrlGetPosts
    }
});
export const { update, selectPostToDelete, unSelectPostToDelete, selectPostToEdit, unSelectPostToEdit, updateUrlGetPosts } = postSlice.actions;
export default postSlice.reducer;