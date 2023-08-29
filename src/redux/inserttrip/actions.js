import { INSERT_TRIP_REQUEST,INSERT_TRIP_SUCCESS,INSERT_TRIP_FAILURE } from './types'

export const insertTripRequest=(data,navigate)=>{
    return {
        type:INSERT_TRIP_REQUEST,
        data,
        navigate
    }
}

export const insertTripSucces=(data)=>{
    return {
        type:INSERT_TRIP_SUCCESS,
        data
    }
}

export const insertTripFailure=(error)=>{
    return {
        type: INSERT_TRIP_FAILURE,
        error
    }
}