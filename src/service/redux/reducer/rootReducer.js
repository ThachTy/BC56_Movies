import { combineReducers } from "redux";
/* Reducer */
import userReducer from "./userReducer";

const rootReducer = combineReducers({ userReducer });

export default rootReducer;