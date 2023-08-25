import { combineReducers } from "@reduxjs/toolkit";
import signupReducer from "../redux/signup/reducer";
import viewCustomerReducer from "./viewcustomer/reducer";
import viewDriverReducer from "./viewdriver/reducer";
import viewTripsReducer from "./viewtrips/reducer";


const rootReducer = combineReducers({
    Signup: signupReducer,
    ViewCustomer: viewCustomerReducer,
    ViewDriver: viewDriverReducer,
    ViewTrip: viewTripsReducer
});

export default rootReducer;