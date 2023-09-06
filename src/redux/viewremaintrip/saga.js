import { takeEvery,put, call } from "redux-saga/effects";
import { VIEW_REMAIN_TRIP_REQUEST, VIEW_REMAIN_TRIP_SUCCESS, VIEW_REMAIN_TRIP_FAILURE } from "./types";
import { toast } from "react-toastify";
import { viewRemainTrips } from "../../services/dpservices";
import { getToken } from "../../services/authservice";

function* viewRemainTripRequest(action) {
    //let data = driversArray;
    console.log("Saga view remain trip");
    const {type, data}=action;
    const token = yield call(getToken);

    try
    {
        const res = yield call(viewRemainTrips,token);
        console.log("view remain trips",res);

        if(res.data.success)
        {
            yield put({type:VIEW_REMAIN_TRIP_SUCCESS, data:res.data.result});
            //return res.data.result
        }
        else
        {
            yield put({type:VIEW_REMAIN_TRIP_FAILURE, error:"Something went wrong"});
            
        }

    }
    catch(error)
    {
        yield put({type:VIEW_REMAIN_TRIP_FAILURE,error})
        toast.error("Something went wrong");
    }

    console.warn("Saga");
    
}

function* viewRemainTripSaga() {
    yield takeEvery(VIEW_REMAIN_TRIP_REQUEST,viewRemainTripRequest);
}

export default viewRemainTripSaga;