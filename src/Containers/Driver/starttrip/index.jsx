import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCustomStyles } from './style';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { startTripRequest } from "../../../redux/starttrip/actions";
import { endTripRequest } from "../../../redux/endtrip/actions";


const StartTrip = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();
  const dataFromState = location.state;
  const [state, setState] = useState({
    otp: ""
  });
  //JSON.stringify(dataFromState, null, 2)

  const customStyles = getCustomStyles();

  const handleChange = (e) => {
    //e.prevetDefault();
    setState({
      ...state,
      otp: e.target.value
    })
  }

  const handleSubmit = (e) => {
    //e.prevetDefault();
    dispatch(startTripRequest({id:dataFromState.id})) ;
    console.log("Submit", state);
  }

  const handleEndTrip = (e) => {
    dispatch(endTripRequest({id:dataFromState.id}))
    navigate("/driver/");
  }

  
      {/* {
        console.log(location)
      } */}

  return (
    <div>
      <style>
        {customStyles}
      </style>

      <div className="d-flex align-items-center py-4 bg-body-tertiary">

        <main className="form-signin w-100 m-auto">

          <h1 className="h3 mb-3 fw-normal">Confirm Trip</h1>

          <div className="form-floating">
            <input type="text" name="email" value={dataFromState.source} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Source</label>
          </div>
          <div className="form-floating">
            <input type="text" value={dataFromState.destination} name="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Destination</label>
          </div>
          <div className="form-floating">
            <input type="text" value={"Rs." + dataFromState.amount} name="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Amount</label>
          </div>
          
          <div className="form-floating">
            <input type="text" value={dataFromState.distance} name="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Distance</label>
          </div>
        
          <div className="form-floating">
            <input type="text" value={dataFromState.mobile.mobile} name="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Mobile No</label>
          </div>

          <form>
            

            <button onClick={handleSubmit} className="btn btn-primary w-100 py-2" type="button">Start Trip</button>
            <button onClick={handleEndTrip} className="btn btn-danger mt-2 w-100 py-2" type="button">End Trip</button>


          </form>


        </main>
      </div>

    </div>
  );
}

export default StartTrip;