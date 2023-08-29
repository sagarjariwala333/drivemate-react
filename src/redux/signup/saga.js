import { takeEvery,put, call } from "redux-saga/effects";
import { TEST,SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./types";
import { Signup } from "../../services/dpservices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function* doSignup(action) {

  const {data,type, navigate} = action;
    
    console.warn("Sign up Saga",data);

    try
    {
      let res = yield call(Signup,data);
      yield put({type:SIGNUP_SUCCESS,data:res})
      yield call(navigate,'/');
      yield call(toast.success,"Thank you to sign up");
    }
    catch(err)
    {
      console.log(err);
      toast.error("Something went wrong");
      yield put({type:SIGNUP_FAILURE, error:err});
    }
}

function* signupSaga() {
    yield takeEvery(SIGNUP_REQUEST,doSignup);
}

export default signupSaga;