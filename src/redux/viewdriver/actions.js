import { FETCH_DRIVERS_RESQUEST, FETCH_DRIVERS_SUCCESS, FETCH_DRIVERS_FAILURE } from './types';

export const fetchDriverRequest=(data)=>{
    return {
        type: FETCH_DRIVERS_RESQUEST,
        data
    }
}

export const fetchDriverSuccess=(data)=>{
    return {
        type: FETCH_DRIVERS_SUCCESS,
        data
    }
}

export const fetchDriverFailue=(error)=>{
    return {
        type: FETCH_DRIVERS_FAILURE,
        error
    }
}