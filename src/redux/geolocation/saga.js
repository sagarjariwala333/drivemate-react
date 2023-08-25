import { takeEvery,put } from "redux-saga/effects";
import {GEOCODE_REQUEST, GEOCODE_SUCCESS, GEOCODE_FAILURE} from './types';

import obj from "../../assets/dummy/reversegeocoding";    

function* geoCodeRequest(action) {
    let data = [
        {
          id:"1",
          title:"None",
          artist:"None"
        },
        {
          id:"1",
          title:"None",
          artist:"None"
        }
      ];
    console.warn("Saga");

    yield put({type:GEOCODE_SUCCESS,data})
}


function* geoLocationSaga() {
    yield takeEvery(GEOCODE_REQUEST,geoCodeRequest);
}

export default geoLocationSaga;