// reducers/index.js
import { combineReducers } from "redux";
import changeTheNumber from "./upDown";

const rootReducer = combineReducers({
    changeTheNumber
});

export default rootReducer;
