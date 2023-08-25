import { FETCH_CUSTOMERS_REQUEST,FETCH_CUSTOMERS_SUCCESS,FETCH_CUSTOMERS_FAILURE } from './types';

export const fetchCustomerRequest=(data)=>{
    return{
        type:FETCH_CUSTOMERS_REQUEST,
        data
    }
}

export const fetchCustomerSuccess=(data)=>{
    return{
        type:FETCH_CUSTOMERS_SUCCESS,
        data
    }
}

export const fetchCustomerailure=(error)=>{
    return{
        type:FETCH_CUSTOMERS_FAILURE,
        error
    }
}