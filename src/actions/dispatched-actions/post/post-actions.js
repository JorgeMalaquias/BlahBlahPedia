function update(state, action) {
    state.updateStatus = action.payload;
}

const userActions = {
    update
};

export default userActions;