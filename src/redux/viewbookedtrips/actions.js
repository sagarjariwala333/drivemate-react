import { VIEW_BOOKEDTRIPS_REQUEST, VIEW_BOOKEDTRIPS_SUCCESS, VIEW_BOOKEDTRIPS_FAILURE } from './types'

export const viewBookedTripRequest=(data)=>{
    console.log("booked trip action request",data);
    return {
        type: VIEW_BOOKEDTRIPS_REQUEST,
        data
    }
}

export const viewBookedTripSuccess=(data)=>{
    return {
        type: VIEW_BOOKEDTRIPS_SUCCESS,
        data
    }    
}

export const viewBookedTripFailure=(error)=>{
    return {
        type: VIEW_BOOKEDTRIPS_FAILURE,
        error
    }    
}