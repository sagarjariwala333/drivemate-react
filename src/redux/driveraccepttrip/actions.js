import { UPDATE_TRIP_REQUEST, UPDATE_TRIP_SUCCESS, UPDATE_TRIP_FAILURE } from "./types"

export const requestUpdateTrip=(data,navigate,mobile)=>{
    return {
        type:UPDATE_TRIP_REQUEST,
        data,
        navigate,
        mobile
    }
}

export const successUpdateTrip=(data)=>{
    return {
        type:UPDATE_TRIP_SUCCESS,
        data
    }
}

export const failureUpdateTrip=(error)=>{
    return {
        type:UPDATE_TRIP_FAILURE,
        error
    }
}