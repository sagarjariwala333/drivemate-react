import { takeEvery,put,call } from "redux-saga/effects";
import {INSERT_TRIP_REQUEST, INSERT_TRIP_SUCCESS, INSERT_TRIP_FAILURE} from './types';
import { getToken } from "../../services/authservice";
import { insertTrip } from "../../services/dpservices";
import { toast } from "react-toastify";

function* tripRequest(action) {
    const {type, data, navigate}=action;
    var token = yield call(getToken);

    try
    {
        var result = yield call(insertTrip,data,token);
        console.log(result.data.success);
        if(result.data.success === true)
        {
            console.log(result.data.success);
            yield put({type:INSERT_TRIP_SUCCESS,data:result.data.result})
            yield call(navigate,"/customer/finddrivers");
            toast.success("Finding drivers");
        }
        else if(result.data.message === "Limit exceed")
        {
            yield put({type:INSERT_TRIP_FAILURE,error:"One trip already booked"})
            toast.error("Already one trip booked");
        }
        else
        {
            yield put({type:INSERT_TRIP_FAILURE,error:"Something went wrong"})
            toast.error("Something went wrong");
        }
    }
    catch(err)
    {
        console.log(err);
        toast.error("Something went wrong");
    }
}


function* tripRequestSaga() {
    yield takeEvery(INSERT_TRIP_REQUEST,tripRequest);
}

export default tripRequestSaga;