import React from "react";
import { useLocation } from "react-router-dom";

const StartTrip=()=>{
    const location = useLocation();
    const dataFromState = location.state;
  
    return (
      <div>
        {
            console.log(location)
        }
        <h2>{"Data Received in Destination:" + dataFromState }</h2>
        <pre>{JSON.stringify(dataFromState, null, 2)}</pre>
      </div>
    );
}

export default StartTrip;