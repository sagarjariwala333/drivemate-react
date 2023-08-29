import { combineReducers } from "@reduxjs/toolkit";
import signupReducer from "../redux/signup/reducer";
import viewCustomerReducer from "./viewcustomer/reducer";
import viewDriverReducer from "./viewdriver/reducer";
import viewTripsReducer from "./viewtrips/reducer";
import geoLocationReducer from "./geolocation/reducer";
import reversegeoLocationReducer from "./reversegeolocation/reducer";
import currentLocationReducer from "./currentposition/reducer";
import distanceReducer from "./distance/reducer";
import loginReducer from "./login/reducer";
import insertTripRequestReducer from "./inserttrip/reducer";
import viewRemainTripReducer from "./viewremaintrip/reducer";


const rootReducer = combineReducers({
    Signup: signupReducer,
    ViewCustomer: viewCustomerReducer,
    ViewDriver: viewDriverReducer,
    ViewTrip: viewTripsReducer,
    Geolocation: geoLocationReducer,
    ReverseGeoLocation: reversegeoLocationReducer,
    CurrentLocation: currentLocationReducer,
    Distance: distanceReducer,
    Login: loginReducer,
    InsertTrip: insertTripRequestReducer,
    ViewRemainTrip:viewRemainTripReducer 
});

export default rootReducer;