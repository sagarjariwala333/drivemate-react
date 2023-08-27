import {REQUEST_DISTANCE,SUCCESS_DISTANCE,FAILURE_DISTANCE} from "./types";

export const requestDistance=(data)=>{
    return {
        type:REQUEST_DISTANCE,
        data
    }
}

export const successDistance=(data)=>{
    return {
        type:SUCCESS_DISTANCE,
        data
    }
}

export const failureDistance=(error)=>{
    return {
        type:FAILURE_DISTANCE,
        error
    }
}