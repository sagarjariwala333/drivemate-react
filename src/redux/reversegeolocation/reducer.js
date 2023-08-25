import {REVERSE_GEOCODE_FAILURE, REVERSE_GEOCODE_SUCCESS, REVERSE_GEOCODE_REQUEST } from './types';


const initialState = {
    loading: false,
    data: [],
    error: null,
};

const reversegeoLocationReducer = (state = initialState, action) => {
    const { type, data, error } = action;

    switch (type) {

        case REVERSE_GEOCODE_REQUEST:
            console.log("reducer",action);
            return {
                ...state,
                loading: true,
                error: null
            }

        case REVERSE_GEOCODE_SUCCESS:
            return {
                ...state,
                loading: false,
                data,
                error: null
            }

        case REVERSE_GEOCODE_FAILURE:
            return {
                ...state,
                loading: false,
                error
            }

        default:
            return state;
    }
}

export default reversegeoLocationReducer;
