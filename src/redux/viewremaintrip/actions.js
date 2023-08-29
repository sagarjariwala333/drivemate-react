import { VIEW_REMAIN_TRIP_REQUEST, VIEW_REMAIN_TRIP_SUCCESS, VIEW_REMAIN_TRIP_FAILURE } from './types'

export const remainTripRequest=(data)=>{
    return {
        type: VIEW_REMAIN_TRIP_REQUEST,
        data
    }
}

export const remainTripSuccess=(data)=>{
    return {
        type: VIEW_REMAIN_TRIP_SUCCESS,
        data
    }    
}

export const remainTripFailure=(error)=>{
    return {
        type: VIEW_REMAIN_TRIP_FAILURE,
        error
    }    
}