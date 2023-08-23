import { takeEvery,put } from "redux-saga/effects";
import { TEST,SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types";

function* doSignup(action) {
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
    yield put({type:SIGNUP_SUCCESS,data})
}

function* signupSaga() {
    yield takeEvery(SIGNUP_REQUEST,doSignup);
}

export default signupSaga;