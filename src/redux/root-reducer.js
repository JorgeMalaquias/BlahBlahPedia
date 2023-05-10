import { combineReducers } from "redux";
import postReducer from "./post/slice";
const rootReducer = combineReducers({ postReducer });

export default rootReducer;