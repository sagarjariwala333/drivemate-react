import { END_TRIP_REQUEST, END_TRIP_SUCCESS, END_TRIP_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const endTripReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case END_TRIP_REQUEST:
          //console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case END_TRIP_SUCCESS:
          //console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case END_TRIP_FAILURE:
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

export default endTripReducer;
