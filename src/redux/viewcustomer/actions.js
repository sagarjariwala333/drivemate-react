import { FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMERS_RESQUEST, FETCH_CUSTOMERS_SUCCESS } from './types';

export const fetchCustomerRequest=(data)=>{
    return {
        type: FETCH_CUSTOMERS_RESQUEST,
        data
    }
}

export const fetchCustomerSuccess=(data)=>{
    return {
        type: FETCH_CUSTOMERS_SUCCESS,
        data
    }
}

export const fetchCustomerFailue=(error)=>{
    return {
        type: FETCH_CUSTOMERS_FAILURE,
        error
    }
}