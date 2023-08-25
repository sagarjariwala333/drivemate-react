import { GEOCODE_REQUEST, GEOCODE_SUCCESS, GEOCODE_FAILURE} from './types';


const initialState = {
    loading: false,
    data: [],
    error: null,
};

const geoLocationReducer = (state = initialState, action) => {
    const { type, data, error } = action;

    switch (type) {

        case GEOCODE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case GEOCODE_SUCCESS:
            return {
                ...state,
                loading: false,
                data,
                error: null
            }

        case GEOCODE_FAILURE:
            return {
                ...state,
                loading: false,
                error
            }

        default:
            return state;
    }
}

export default geoLocationReducer;
