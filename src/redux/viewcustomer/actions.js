import { FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMERS_RESQUEST, FETCH_CUSTOMERS_SUCCESS, 
FETCH_CUSTOMERSBYID_RESQUEST, FETCH_CUSTOMERSBYID_SUCCESS, FETCH_CUSTOMERSBYID_FAILURE
} from './types';

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

export const fetchCustomerByIdRequest=(data)=>{
    return {
        type: FETCH_CUSTOMERSBYID_RESQUEST,
        data
    }
}

export const fetchCustomerByIdSuccess=(data)=>{
    return {
        type: FETCH_CUSTOMERSBYID_SUCCESS,
        data
    }
}

export const fetchCustomerByIdFailue=(error)=>{
    return {
        type: FETCH_CUSTOMERSBYID_FAILURE,
        error
    }
}