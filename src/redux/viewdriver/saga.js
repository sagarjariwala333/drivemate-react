import { takeEvery,put, call } from "redux-saga/effects";
import { FETCH_DRIVERS_RESQUEST, FETCH_DRIVERS_SUCCESS, FETCH_DRIVERS_FAILURE } from "./types";
import driversArray from '../../assets/dummy/driver';
import {getAllUsers} from "../../services/dpservices";
import { toast } from "react-toastify";

function* getDrivers(action) {
    const { data: { role, queryOn, filterQuery, sortBy, isAscending } } = action;

    console.log(action);

    const res = yield call(getAllUsers, { role, filterOn: queryOn, filterQuery, sortBy, isAscending });

    console.log(res);

    if (res.data.message === "Success") {
        yield put({ type: FETCH_DRIVERS_SUCCESS, data: res.data.result });
    } else {
        toast.error(res.data.message);
        yield put({ type: FETCH_DRIVERS_FAILURE, data: res.data.message });
    }
}


function* viewDriversSaga() {
    yield takeEvery(FETCH_DRIVERS_RESQUEST,getDrivers);
}

export default viewDriversSaga;