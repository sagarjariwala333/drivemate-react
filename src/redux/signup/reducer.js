import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, TEST } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const signupReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case TEST:
            console.warn("This is reducer");
            return state;

        case SIGNUP_REQUEST:
          console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case SIGNUP_SUCCESS:
          console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case SIGNUP_FAILURE:
            console.warn("Reducers signup fail");
            return {
              ...state,
              loading:false,
              error
            }
            
        default:
          return state;
    }
}

export default signupReducer;
