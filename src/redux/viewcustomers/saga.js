import { takeEvery,put } from "redux-saga/effects";
import { FETCH_CUSTOMERS_SUCCESS,FETCH_CUSTOMERS_REQUEST } from "./types";

function* fetchCustomers(action) {
    let data = "Hello";
    yield put({type:FETCH_CUSTOMERS_SUCCESS,data})
}


function* signupSaga() {
    yield takeEvery(FETCH_CUSTOMERS_REQUEST,fetchCustomers);
}

export default signupSaga;