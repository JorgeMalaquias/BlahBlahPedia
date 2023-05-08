function subscribe(state, action) {
    state.username = action.payload;
}

const userActions = {
    subscribe
};

export default userActions;

