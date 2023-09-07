import { VIEW_BOOKEDTRIPS_REQUEST, VIEW_BOOKEDTRIPS_SUCCESS, VIEW_BOOKEDTRIPS_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const viewBookedTripReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case VIEW_BOOKEDTRIPS_REQUEST:
          //console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case VIEW_BOOKEDTRIPS_SUCCESS:
          //console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case VIEW_BOOKEDTRIPS_FAILURE:
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
