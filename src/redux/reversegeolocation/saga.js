import { takeEvery, put, call } from "redux-saga/effects";
import { REVERSE_GEOCODE_FAILURE, REVERSE_GEOCODE_SUCCESS, REVERSE_GEOCODE_REQUEST } from './types';
import axios, * as others from 'axios';

import obj from "../../assets/dummy/reversegeocoding";
import { LOCATIONIQ_ENDPOINT, LOCATIONIQ_KEY, LOCATIONIQ_URL } from "../../assets/environment";



function* reverseGeoCodeRequest(action) {
    //const axios = require('axios');

    console.log("Saga called");
    const { type, data, error } = action;
    var result;
    
//    https://api.distancematrix.ai/maps/api/geocode/json?latlng=40.714224,-73.961452&key=<your_access_token>

    const requestURL = LOCATIONIQ_ENDPOINT + LOCATIONIQ_URL  +
        "latlng=" + data.lattitude + "," + data.longitude + "&key=" + LOCATIONIQ_KEY;

    console.log(requestURL);

    try {
        const response = yield call(axios.get, requestURL);
        const result = response.data;
        yield put({ type: REVERSE_GEOCODE_SUCCESS, data: result });
    } catch (error) {
        console.error("Error:", error);
    }

}


function* reversegeoLocationSaga() {
    yield takeEvery(REVERSE_GEOCODE_REQUEST, reverseGeoCodeRequest);
}

export default reversegeoLocationSaga;