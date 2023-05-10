function update(state, action) {
    state.updateStatus = action.payload;
}
function selectPostToDelete(state, action) {
    state.postToDeleteId = action.payload;
}
function unSelectPostToDelete(state, action) {
    state.postToDeleteId = null;
}
function selectPostToEdit(state, action) {
    state.postToEdit = action.payload;
}
function unSelectPostToEdit(state, action) {
    state.postToEdit = null;
}

const userActions = {
    update,
    selectPostToDelete,
    unSelectPostToDelete,
    selectPostToEdit,
    unSelectPostToEdit
};

export default userActions;