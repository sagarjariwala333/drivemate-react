import {GEOCODE_REQUEST, GEOCODE_SUCCESS, GEOCODE_FAILURE} from './types';


export const geoCodeRequest=(data)=>{
    return {
        type: GEOCODE_REQUEST,
        data
    }
}

export const geoCodeSuccess=(data)=>{
    return {
        type: GEOCODE_SUCCESS,
        data
    }
}

export const geoCodeFailure=(error)=>{
    return {
        type: GEOCODE_FAILURE,
        error
    }
}

