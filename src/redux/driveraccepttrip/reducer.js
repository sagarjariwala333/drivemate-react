import { UPDATE_TRIP_REQUEST, UPDATE_TRIP_SUCCESS, UPDATE_TRIP_FAILURE } from "./types"

const initialState = {
    loading: false,
    data: [],
    error: null,
};

const driverAcceptReducer = (state = initialState, action) => {
    const { type, data, error } = action;

    switch (type) {

        case UPDATE_TRIP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case UPDATE_TRIP_SUCCESS:
            return {
                ...state,
                loading: false,
                data,
                error: null
            }

        case UPDATE_TRIP_FAILURE:
            return {
                ...state,
                loading: false,
                error
            }

        default:
            return state;
    }
}

export default driverAcceptReducer;
