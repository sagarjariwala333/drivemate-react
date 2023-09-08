import { takeEvery,put, call } from "redux-saga/effects";
import { VIEW_REMAIN_TRIP_REQUEST, VIEW_REMAIN_TRIP_SUCCESS, VIEW_REMAIN_TRIP_FAILURE, START_TRIP_SUCCESS, START_TRIP_FAILURE, START_TRIP_REQUEST } from "./types";
import { toast } from "react-toastify";
import { startTrip, viewRemainTrips } from "../../services/dpservices";
import { getToken } from "../../services/authservice";

function* startTripRequest(action) {
    //let data = driversArray;
    //console.log("Saga view remain trip");
    const {type, data}=action;
    //const token = yield call(getToken);

    try
    {
        console.log("start trip saga",data);
        const res = yield call(startTrip,data.id);
        //console.log("view remain trips",res);

        if(res.data.success)
        {
            yield put({type:START_TRIP_SUCCESS, data:res.data.result});
            toast.success("Trip started");
            //return res.data.result
        }
        else
        {
            yield put({type:START_TRIP_FAILURE, error:"Something went wrong"});
            
        }

    }
    catch(error)
    {
        console.log(error)
        yield put({type:START_TRIP_FAILURE,error})
        toast.error("Something went wrong");
    }

    console.warn("Saga");
    
}

function* startTripSaga() {
    yield takeEvery(START_TRIP_REQUEST,startTripRequest);
}

export default startTripSaga;