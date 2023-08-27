import {FAILURE_CURRENT_LOCATION, REQUEST_CURRENT_LOCATION, SUCCESS_CURRENT_LOCATION} from './types';

export const fetchCurrentLocation=()=>{
    return {
        type:REQUEST_CURRENT_LOCATION,
    }
}

export const successCurrentLocation=(data)=>{
    return {
        type:SUCCESS_CURRENT_LOCATION,
        data
    }
}

export const failureCurrentLocation=(error)=>{
    return {
        type: FAILURE_CURRENT_LOCATION,
        error
    }
}