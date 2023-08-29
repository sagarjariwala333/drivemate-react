import { LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAILURE } from './types'

export const loginRequest=(data,navigate)=>{
    return {
        type: LOGIN_REQUEST,
        data,
        navigate
    }
}

export const loginSuccess=(data)=>{
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

export const loginFailure=(error)=>{
    return {
        type: LOGIN_FAILURE,
        error
    }
}