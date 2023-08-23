import {SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, TEST} from './types';

export const test=()=>{
    return {
        type: TEST
    }
}

export const signupRequest=(data)=>{
    return {
        type: SIGNUP_REQUEST,
        data
    }
}

export const signupSuccess=(data)=>{
    return {
        type: SIGNUP_SUCCESS,
        data
    }
}

export const signupFailue=(error)=>{
    return {
        type: SIGNUP_FAILURE,
        error
    }
}