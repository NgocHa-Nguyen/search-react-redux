import users from "./indexReducer";
import { combineReducers } from "redux";

const myReducer =  combineReducers({
    users,
    
});
export default myReducer;