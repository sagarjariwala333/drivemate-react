import { combineReducers } from "@reduxjs/toolkit";
import signupReducer from "../redux/signup/reducer";
import viewCustomerReducer from "./viewcustomer/reducer";
import viewDriverReducer from "./viewdriver/reducer";
import viewTripsReducer from "./viewtrips/reducer";
import geoLocationReducer from "./geolocation/reducer";
import reversegeoLocationReducer from "./reversegeolocation/reducer";


const rootReducer = combineReducers({
    Signup: signupReducer,
    ViewCustomer: viewCustomerReducer,
    ViewDriver: viewDriverReducer,
    ViewTrip: viewTripsReducer,
    Geolocation: geoLocationReducer,
    ReverseGeoLocation: reversegeoLocationReducer
});

export default rootReducer;