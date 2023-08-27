import { takeEvery, put, call } from "redux-saga/effects";
import {
    REQUEST_DISTANCE,
    SUCCESS_DISTANCE,
    FAILURE_DISTANCE
} from "./types";
import { geocoding, getDistance } from "../../services/locationSerice";

function* requestDistance(action)
{
    const {type,data} = action;
    console.log("distance saga",action);

    const src = yield call(geocoding,data.source)
    const des = yield call(geocoding,data.destination)
    const obj = 
    {
      src:src.data.result[0].geometry.location,
      des:des.data.result[0].geometry.location
    }

    const dis = yield call(getDistance,obj);
    const {distance, duration} = dis.data.rows[0].elements[0];
    const dis_dur = {
      distance,
      duration
    }
    console.log("distance saga",dis_dur);
    yield put({type:SUCCESS_DISTANCE, data:dis_dur});
}

function* distanceSaga() {
  yield takeEvery(REQUEST_DISTANCE, requestDistance);
}

export default distanceSaga;
