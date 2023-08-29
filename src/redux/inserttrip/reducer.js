import { INSERT_TRIP_REQUEST, INSERT_TRIP_SUCCESS, INSERT_TRIP_FAILURE } from './types';


const initialState = {
    loading: false,
    data: [],
    error: null,
};

const insertTripRequestReducer = (state = initialState, action) => {
    const { type, data, error } = action;

    switch (type) {

        case INSERT_TRIP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case INSERT_TRIP_SUCCESS:
            return {
                ...state,
                loading: false,
                data,
                error: null
            }

        case INSERT_TRIP_FAILURE:
            return {
                ...state,
                loading: false,
                error
            }

        default:
            return state;
    }
}

export default insertTripRequestReducer;
