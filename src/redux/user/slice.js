import { createSlice } from "@reduxjs/toolkit";
import userActions from "../../actions/user/user-actions";

const initialState = {
    username: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        subscribe: userActions.subscribe
    }
});
export const { subscribe } = userSlice.actions;
export default userSlice.reducer;