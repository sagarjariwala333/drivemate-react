import { takeEvery,put, call } from "redux-saga/effects";
import { VIEW_BOOKEDTRIPS_REQUEST, VIEW_BOOKEDTRIPS_SUCCESS, VIEW_BOOKEDTRIPS_FAILURE } from "./types";
import { toast } from "react-toastify";
import { viewBookedTrips } from "../../services/dpservices";
import { getToken } from "../../services/authservice";

function* viewBookedTripRequest(action) {
    
    const {type, data}=action;
    const token = yield call(getToken);

    try
    {
        const res = yield call(viewBookedTrips,token);
        
        if(res.data.success)
        {
            yield put({type:VIEW_BOOKEDTRIPS_SUCCESS, data:res.data.result});
            //return res.data.result
        }
        else
        {
            yield put({type:VIEW_BOOKEDTRIPS_FAILURE, error:"Something went wrong"});
            
        }

    }
    catch(error)
    {
        yield put({type:VIEW_BOOKEDTRIPS_FAILURE,error})
        toast.error("Something went wrong");
    }
    
}

function* viewBookedTripSaga() {
    yield takeEvery(VIEW_BOOKEDTRIPS_REQUEST,viewBookedTripRequest);
}

export default viewBookedTripSaga;