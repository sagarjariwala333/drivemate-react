import { takeEvery,put, call } from "redux-saga/effects";
import { VIEW_BOOKED_TRIPS_REQUEST, VIEW_BOOKED_TRIPS_SUCCESS, VIEW_BOOKED_TRIPS_FAILURE } from "./types";
import { toast } from "react-toastify";
import { viewBookedTrips } from "../../services/dpservices";
import { getToken } from "../../services/authservice";

function* viewBookedTripRequest(action) {
    //let data = driversArray;
    console.log("Saga view remain trip");
    //const {type, data}=action;
    const token = yield call(getToken);

    try
    {
        const res = yield call(viewBookedTrips,token);
        //console.log("view remain trips",res);

        if(res.data.success)
        {
            console.log("Booked trips response",res.data.result);

            yield put({type:VIEW_BOOKED_TRIPS_SUCCESS, data:res.data.result});
            //return res.data.result
        }
        else
        {
            console.log("Booked trips response",res);
            yield put({type:VIEW_BOOKED_TRIPS_FAILURE, error:"Something went wrong"});
            
        }

    }
    catch(error)
    {
        yield put({type:VIEW_BOOKED_TRIPS_FAILURE,error})
        toast.error("Something went wrong");
    }

    console.warn("Saga");
    
}

function* viewBookedTripSaga() {
    yield takeEvery(VIEW_BOOKED_TRIPS_REQUEST,viewBookedTripRequest);
}

export default viewBookedTripSaga;