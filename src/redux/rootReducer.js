import { combineReducers } from "@reduxjs/toolkit";
import signupReducer from "../redux/signup/reducer";


const rootReducer = combineReducers({
    Signup: signupReducer
});

export default rootReducer;