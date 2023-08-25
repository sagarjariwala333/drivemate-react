import { FETCH_CUSTOMERS_REQUEST,FETCH_CUSTOMERS_SUCCESS,FETCH_CUSTOMERS_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const signupReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case FETCH_CUSTOMERS_REQUEST:
            return {
                ...state,
                loading:true,
                data
            }
            
        case FETCH_CUSTOMERS_SUCCESS:
          console.warn("Sign up request success reducer");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

        case FETCH_CUSTOMERS_FAILURE:
          console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data:null,
            error
          }
            
        default:
          return state;
    }
}

export default signupReducer;
