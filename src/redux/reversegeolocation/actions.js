import {REVERSE_GEOCODE_FAILURE, REVERSE_GEOCODE_SUCCESS, REVERSE_GEOCODE_REQUEST} from './types';

export const reversegeoCodeRequest=(data)=>{
    console.log("action",data);
    return {
        type: REVERSE_GEOCODE_REQUEST,
        data
    }
}

export const reversegeoCodeSuccess=(data)=>{
    return {
        type: REVERSE_GEOCODE_SUCCESS,
        data
    }
}

export const reversegeoCodeFailure=(error)=>{
    return {
        type: REVERSE_GEOCODE_FAILURE,
        error
    }
}