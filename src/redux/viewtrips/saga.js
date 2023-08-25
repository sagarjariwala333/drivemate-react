import { takeEvery,put } from "redux-saga/effects";
import { FETCH_TRIPS_RESQUEST, FETCH_TRIPS_FAILURE, FETCH_DRIVERS_SUCCESS, FETCH_TRIPS_SUCCESS } from "./types";
import tripsArray from '../../assets/dummy/trip';

function* getTrips(action) {
    let data = tripsArray;
    console.warn("Saga");
    yield put({type:FETCH_TRIPS_SUCCESS,data})
}

function* viewTripsSaga() {
    yield takeEvery(FETCH_TRIPS_RESQUEST,getTrips);
}

export default viewTripsSaga;