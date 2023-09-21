import {
  FETCH_CUSTOMERS_RESQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  FETCH_CUSTOMERSBYID_RESQUEST,
  FETCH_CUSTOMERSBYID_SUCCESS,
  FETCH_CUSTOMERSBYID_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const viewCustomerReducer = (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case FETCH_CUSTOMERS_RESQUEST:
      //console.warn("Sign up request");
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CUSTOMERS_SUCCESS:
      //console.warn("Reducers signup");
      return {
        ...state,
        loading: false,
        data,
        error: null,
      };

    case FETCH_CUSTOMERS_FAILURE:
      //console.warn("Reducers signup fail");
      return {
        ...state,
        loading: false,
        error,
      };

    case FETCH_CUSTOMERSBYID_RESQUEST:
      //console.warn("Sign up request");
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CUSTOMERSBYID_SUCCESS:
      //console.warn("Reducers signup");
      return {
        ...state,
        loading: false,
        data,
        error: null,
      };

    case FETCH_CUSTOMERSBYID_FAILURE:
      //console.warn("Reducers signup fail");
      return {
        ...state,
        loading: false,
        error,
      };

    default:
      return state;
  }
};

export default viewCustomerReducer;
