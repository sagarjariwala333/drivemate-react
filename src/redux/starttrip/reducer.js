import { START_TRIP_REQUEST, START_TRIP_SUCCESS, START_TRIP_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const startTripReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case START_TRIP_REQUEST:
          //console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case START_TRIP_SUCCESS:
          //console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case START_TRIP_FAILURE:
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

export default startTripReducer;
