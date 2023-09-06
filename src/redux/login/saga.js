import { takeEvery,put, call } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";
import { signIn } from "../../services/dpservices";
import { toast } from "react-toastify";
import { login } from "../../services/authservice";

function* doLogin(action) {
  const {data,type,navigate} = action;
    
    console.warn("Sign in Saga",data);

    try
    {
      var result = yield call(signIn,data);

      if(result.data.result.status === 1)
      {
        console.log(result.data.result);
        var profile = result.data.result;
        var isLoggedIn = yield call(login,profile);

        if(isLoggedIn)
        {
          if(profile.role === 'C' && profile.firstName === "Admin")
          {
            yield call(navigate,"/admin/");
            yield call(toast.success,"Login successful");
          }
          else if(profile.role === 'C')
          {
            yield call(navigate,"/customer/");
            yield call(toast.success,"Login successful");
          }
          else if(profile.role === 'D')
          {
            yield call(navigate,"/driver");
            yield call(toast.success,"Login successful");
          }
          else
          {
            yield call(navigate,"/error/");
            yield call(toast.success,"Login successful");
          }
          
        }
        else
        {
          yield call(toast,"Already Logged In");
        }
        
      }
      else
      {
        yield call(toast.error,"Wrong login credentials");
      }
    }
    catch(error)
    {
      yield put({type:LOGIN_FAILURE,error})
      yield call(toast.error,error);
    }
    
    yield put({type:LOGIN_SUCCESS,data})
}

function* loginSaga() {
    yield takeEvery(LOGIN_REQUEST,doLogin);
}

export default loginSaga;