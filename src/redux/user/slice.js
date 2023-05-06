import { createSlice } from "@reduxjs/toolkit";
import { subscribe } from "../../actions/user/subscribe";

const initialState = {
    userName: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        subscribe
    }
});

export default userSlice;