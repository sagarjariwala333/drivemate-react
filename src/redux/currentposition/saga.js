import { takeEvery, put, call } from "redux-saga/effects";
import {
  REQUEST_CURRENT_LOCATION,
  SUCCESS_CURRENT_LOCATION,
  FAILURE_CURRENT_LOCATION,
} from "./types";

const getCurrentPosition = () =>
  new Promise((resolve, reject) => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            reject(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        var obj = {
          message: "Not supported",
        };
        reject(obj);
      }
    } catch (error) {
      reject(error.message);
    }
  });

function* currentLocationRequest() {
  try {
    const position = yield call(getCurrentPosition);
    const { latitude, longitude } = position.coords;
    var obj = {
      latitude,
      longitude,
    };
    yield put({ type: SUCCESS_CURRENT_LOCATION, data: obj });
  } catch (error) {
    yield put({ type: FAILURE_CURRENT_LOCATION, error });
  }
}

function* currentLocationSaga() {
  yield takeEvery(REQUEST_CURRENT_LOCATION, currentLocationRequest);
}

export default currentLocationSaga;
