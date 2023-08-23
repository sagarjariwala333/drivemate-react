import { all, fork } from 'redux-saga/effects';
import signupSaga from './signup/saga';
// Import other sagas here

function* rootSaga() {
  yield all([
    fork(signupSaga),
    // Add other forked sagas here
  ]);
}

export default rootSaga;
