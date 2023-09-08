import { START_TRIP_REQUEST, START_TRIP_SUCCESS, START_TRIP_FAILURE } from './types'

export const startTripRequest=(data)=>{
    console.log("Start trip request", data);
    //console.log("remain trip action request",data);
    return {
        type: START_TRIP_REQUEST,
        data
    }
}

export const startTripSuccess=(data)=>{
    return {
        type: START_TRIP_SUCCESS,
        data
    }    
}

export const startTripFailure=(error)=>{
    return {
        type: START_TRIP_FAILURE,
        error
    }    
}