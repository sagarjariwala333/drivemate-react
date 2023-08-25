import { FETCH_DRIVERS_RESQUEST, FETCH_DRIVERS_SUCCESS, FETCH_DRIVERS_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const viewDriverReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case FETCH_DRIVERS_RESQUEST:
          //console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case FETCH_DRIVERS_SUCCESS:
          //console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case FETCH_DRIVERS_FAILURE:
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

export default viewDriverReducer;
