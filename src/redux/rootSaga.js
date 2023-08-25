import { all, fork } from 'redux-saga/effects';
import signupSaga from './signup/saga';
import viewCustomerSaga from './viewcustomer/saga';
import viewDriversSaga from './viewdriver/saga';
import viewTripsSaga from './viewtrips/saga';
import geoLocationSaga from './geolocation/saga';
import reversegeoLocationSaga from './reversegeolocation/saga';
// Import other sagas here

function* rootSaga() {
  yield all([
    fork(signupSaga),
    fork(viewCustomerSaga),
    fork(viewDriversSaga),
    fork(viewTripsSaga),
    fork(geoLocationSaga),
    fork(reversegeoLocationSaga)
    // Add other forked sagas here
  ]);
}

export default rootSaga;
