import { takeEvery, put, call } from "redux-saga/effects";
import { UPDATE_TRIP_REQUEST, UPDATE_TRIP_SUCCESS, UPDATE_TRIP_FAILURE } from './types'
import { getToken } from "../../services/authservice";
import { driverAcceptTrip } from "../../services/dpservices";
import { toast } from "react-toastify";

function* driverAcceptRequest(action)
{
    const {data,type, navigate, mobile} = action;
    
    console.warn("Sign up Saga",data);

    try
    {
        const token = yield call(getToken);
        let res = yield call(driverAcceptTrip,token,data);
        console.log("accept saga",res);
        yield put({type:UPDATE_TRIP_SUCCESS,data:res})
        let obj = {
          ...res.data.result,
          mobile
        }
        yield call(navigate,'/driver/starttrip', {state: obj});
        //navigate('/driver/starttrip',{state: res});
        yield call(toast.success,"Success");
    }
    catch(err)
    {
      console.log(err);
      toast.error("Something went wrong");
      yield put({type:UPDATE_TRIP_FAILURE, error:err});
    }
}

function* driverAcceptTripSaga() {
  yield takeEvery(UPDATE_TRIP_REQUEST, driverAcceptRequest);
}

export default driverAcceptTripSaga;
