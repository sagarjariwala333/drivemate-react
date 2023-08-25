import { takeEvery,put } from "redux-saga/effects";
import { FETCH_DRIVERS_RESQUEST, FETCH_DRIVERS_SUCCESS, FETCH_DRIVERS_FAILURE } from "./types";
import driversArray from '../../assets/dummy/driver';

function* getDrivers(action) {
    let data = driversArray;
    console.warn("Saga");
    yield put({type:FETCH_DRIVERS_SUCCESS,data})
}

function* viewDriversSaga() {
    yield takeEvery(FETCH_DRIVERS_RESQUEST,getDrivers);
}

export default viewDriversSaga;