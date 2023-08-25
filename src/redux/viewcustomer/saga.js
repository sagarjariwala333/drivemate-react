import { takeEvery,put } from "redux-saga/effects";
import { FETCH_CUSTOMERS_RESQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE } from "./types";
import Customers from '../../assets/dummy/customers';

function* getCustomers(action) {
    let data = Customers;
    console.warn("Saga");
    yield put({type:FETCH_CUSTOMERS_SUCCESS,data})
}

function* viewCustomerSaga() {
    yield takeEvery(FETCH_CUSTOMERS_RESQUEST,getCustomers);
}

export default viewCustomerSaga;