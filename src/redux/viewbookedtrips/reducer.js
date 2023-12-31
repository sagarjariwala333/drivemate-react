import { VIEW_BOOKED_TRIPS_REQUEST, VIEW_BOOKED_TRIPS_SUCCESS, VIEW_BOOKED_TRIPS_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const viewBookedTripReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case VIEW_BOOKED_TRIPS_REQUEST:
          //console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case VIEW_BOOKED_TRIPS_SUCCESS:
          console.log("Reducer successes",data);
          //console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case VIEW_BOOKED_TRIPS_FAILURE:
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

export default viewBookedTripReducer;
