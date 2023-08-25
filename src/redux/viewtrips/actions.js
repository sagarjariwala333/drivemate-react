import { FETCH_TRIPS_RESQUEST, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_FAILURE } from './types';

export const fetchTripsRequest=(data)=>{
    return {
        type: FETCH_TRIPS_RESQUEST,
        data
    }
}

export const fetchTripsSuccess=(data)=>{
    return {
        type: FETCH_TRIPS_SUCCESS,
        data
    }
}

export const fetchTripsFailure=(error)=>{
    return {
        type: FETCH_TRIPS_FAILURE,
        error
    }
}