import { takeEvery,put, call } from "redux-saga/effects";
import { END_TRIP_SUCCESS, END_TRIP_FAILURE, END_TRIP_REQUEST } from "./types";
import { toast } from "react-toastify";
import { endTrip } from "../../services/dpservices";

function* endTripRequest(action) {
    //let data = driversArray;
    //console.log("Saga view remain trip");
    const {type, data}=action;
    //const token = yield call(getToken);

    try
    {
        //console.log("start trip saga",data);
        const res = yield call(endTrip,data.id);
        //console.log("view remain trips",res);

        if(res.data.success)
        {
            yield put({type:END_TRIP_SUCCESS, data:res.data.result});
            toast.success("Trip ended");
            //return res.data.result
        }
        else
        {
            yield put({type:END_TRIP_FAILURE, error:"Something went wrong"});
            
        }

    }
    catch(error)
    {
        console.log(error)
        yield put({type:END_TRIP_FAILURE,error})
        toast.error("Something went wrong");
    }

    console.warn("Saga");
    
}

function* endTripSaga() {
    yield takeEvery(END_TRIP_REQUEST,endTripRequest);
}

export default endTripSaga;