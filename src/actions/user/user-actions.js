function subscribe(state, action) {
    state.userName = action.payload;
}

const userActions = {
    subscribe
};

export default userActions;

