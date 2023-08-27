import { REQUEST_DISTANCE,SUCCESS_DISTANCE,FAILURE_DISTANCE } from './types';


const initialState = {
    loading: false,
    data: [],
    error: null,
};

const distanceReducer = (state = initialState, action) => {
    const { type, data, error } = action;

    switch (type) {

        case REQUEST_DISTANCE:
            return {
                ...state,
                loading: true,
                error: null
            }

        case SUCCESS_DISTANCE:
            return {
                ...state,
                loading: false,
                data,
                error: null
            }

        case FAILURE_DISTANCE:
            return {
                ...state,
                loading: false,
                error
            }

        default:
            return state;
    }
}

export default distanceReducer;
