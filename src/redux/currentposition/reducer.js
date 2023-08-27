import { FAILURE_CURRENT_LOCATION, REQUEST_CURRENT_LOCATION, SUCCESS_CURRENT_LOCATION } from './types';


const initialState = {
    loading: false,
    data: [],
    error: null,
};

const currentLocationReducer = (state = initialState, action) => {
    const { type, data, error } = action;

    switch (type) {

        case REQUEST_CURRENT_LOCATION:
            return {
                ...state,
                loading: true,
                error: null
            }

        case SUCCESS_CURRENT_LOCATION:
            return {
                ...state,
                loading: false,
                data,
                error: null
            }

        case FAILURE_CURRENT_LOCATION:
            return {
                ...state,
                loading: false,
                error
            }

        default:
            return state;
    }
}

export default currentLocationReducer;
