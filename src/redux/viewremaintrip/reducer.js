import { VIEW_REMAIN_TRIP_REQUEST, VIEW_REMAIN_TRIP_SUCCESS, VIEW_REMAIN_TRIP_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const viewRemainTripReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case VIEW_REMAIN_TRIP_REQUEST:
          //console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case VIEW_REMAIN_TRIP_SUCCESS:
          //console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case VIEW_REMAIN_TRIP_FAILURE:
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

export default viewRemainTripReducer;
