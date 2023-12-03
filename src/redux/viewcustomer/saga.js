import { takeEvery,put, call } from "redux-saga/effects";
import { FETCH_CUSTOMERS_RESQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMERSBYID_SUCCESS, FETCH_CUSTOMERSBYID_RESQUEST } from "./types";
import Customers from '../../assets/dummy/customers';
import { getAllUsers, getUserById } from "../../services/dpservices";
import { toast } from "react-toastify";

function* getCustomers(action) {

    //console.warn("Saga");
    const { data: { role, queryOn, filterQuery, sortBy, isAscending } } = action;

   console.log(action);

    // Call your API function with these parameters
    const res = yield call(getAllUsers, { role, filterOn : queryOn, filterQuery, sortBy, isAscending });
    console.log(res);

    //toast.success("Data fetched successfully");

    yield put({type:FETCH_CUSTOMERS_SUCCESS,data:res.data.result})
}

function* getCustomersById(action) {
    let {data} = action;

    //console.warn("Saga");
    const res = yield call(getUserById, data);

    //toast.success("Data fetched successfully");

    if(res.data.message === "Success")
    {
        yield put({type:FETCH_CUSTOMERSBYID_SUCCESS,data:res.data.result})
        //toast.success("Profile fetched successfully");
    }
    else
    {
        toast.error(res.data.message)
        yield put({type:FETCH_CUSTOMERS_FAILURE,data:res.data.message})
    }
}

function* viewCustomerSaga() {
    yield takeEvery(FETCH_CUSTOMERS_RESQUEST,getCustomers);
    yield takeEvery(FETCH_CUSTOMERSBYID_RESQUEST, getCustomersById);
}

export default viewCustomerSaga;