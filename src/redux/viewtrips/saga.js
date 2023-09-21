import { takeEvery,put, call } from "redux-saga/effects";
import { FETCH_TRIPS_RESQUEST, FETCH_TRIPS_FAILURE, FETCH_DRIVERS_SUCCESS, FETCH_TRIPS_SUCCESS } from "./types";
import tripsArray from '../../assets/dummy/trip';
import { getAllTrips } from "../../services/dpservices";
import { toast } from "react-toastify";

function* getTrips() {      

    const res  = yield call(getAllTrips);

    if(res.data.message === "Success")
    {
        yield put({type:FETCH_TRIPS_SUCCESS,data:res.data.result})
    }
    else
    {
        toast.error(res.data.message);
        yield put({type:FETCH_TRIPS_FAILURE,error:res.data.message})
    }
}

function* viewTripsSaga() {
    yield takeEvery(FETCH_TRIPS_RESQUEST,getTrips);
}

export default viewTripsSaga;