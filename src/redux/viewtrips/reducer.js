import { FETCH_TRIPS_RESQUEST, FETCH_TRIPS_SUCCESS, FETCH_DRIVERS_FAILURE, FETCH_TRIPS_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const viewTripsReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case FETCH_TRIPS_RESQUEST:
          //console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case FETCH_TRIPS_SUCCESS:
          //console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case FETCH_TRIPS_FAILURE:
            //console.warn("Reducers signup fail");
            return {
              ...state,
              loading:false,
              error
            }
            
        default:
          return state;
    }
}

export default viewTripsReducer;
