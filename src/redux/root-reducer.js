import { combineReducers } from "redux";
import userReducer from "./user/slice";
import postReducer from "./post/slice";
const rootReducer = combineReducers({ userReducer, postReducer });

export default rootReducer;