import { END_TRIP_REQUEST, END_TRIP_SUCCESS, END_TRIP_FAILURE } from './types'

export const endTripRequest=(data)=>{
    console.log("Start trip request", data);
    //console.log("remain trip action request",data);
    return {
        type: END_TRIP_REQUEST,
        data
    }
}

export const endTripSuccess=(data)=>{
    return {
        type: END_TRIP_SUCCESS,
        data
    }    
}

export const endTripFailure=(error)=>{
    return {
        type: END_TRIP_FAILURE,
        error
    }    
}