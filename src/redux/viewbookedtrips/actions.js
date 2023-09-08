import { VIEW_BOOKED_TRIPS_REQUEST, VIEW_BOOKED_TRIPS_SUCCESS, VIEW_BOOKED_TRIPS_FAILURE } from './types'

export const bookedTripRequest=()=>{
    console.log("Booked trips request");
    //console.log("remain trip action request",data);
    return {
        type: VIEW_BOOKED_TRIPS_REQUEST,
    }
}

export const bookedTripSuccess=(data)=>{
    return {
        type: VIEW_BOOKED_TRIPS_SUCCESS,
        data
    }    
}

export const bookedTripFailure=(error)=>{
    return {
        type: VIEW_BOOKED_TRIPS_FAILURE,
        error
    }    
}