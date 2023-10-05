import React, { useEffect, useState } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { remainTripRequest } from "../../../redux/viewremaintrip/actions";
import LoadingPage from '../../Loading';
import { requestUpdateTrip } from "../../../redux/driveraccepttrip/actions";
import { useNavigate } from "react-router-dom";

function DriverHome() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { viewRemainTrip, driverAccept } = useSelector(state => ({
        viewRemainTrip: state.ViewRemainTrip,
        driverAccept: state.DriverAccept
    }));

    function callApi()
    {
        dispatch(remainTripRequest(null));
    }

    useEffect(() => {
        const interval = setInterval(() => {
          callApi();
        }, 5000); 
        
        return () => clearInterval(interval);
      }, []); 
      

    useEffect(() => {
        console.log("Driver home");
        dispatch(remainTripRequest(null));
    }, [])

    useEffect(() => {
        console.log("templ", viewRemainTrip);
    }, [viewRemainTrip])

    function handleAcceptTrip(id,mobile) {
        dispatch(requestUpdateTrip({ id }, navigate, { mobile }));
    }


    //console.log(res);

    return (
        (viewRemainTrip?.loading || driverAccept?.loading) ? <LoadingPage /> :
            <>
                <div className="p-5">
                    

                    <table id="Admin" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm">Name

                                </th>

                                <th className="th-sm">Source
                                </th>

                                <th className="th-sm">Destination
                                </th>

                                <th className="th-sm">Mobile_No
                                </th>

                                <th className="th-sm">Amount
                                </th>

                                <th className="th-sm">Distance
                                </th>

                                <th className="th-sm"> Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                viewRemainTrip?.data?.map(trip => {
                                    return (
                                        <>

                                            <tr>
                                                <td>{trip.customerName}</td>
                                                <td>{trip.source}</td>
                                                <td>{trip.destination}</td>
                                                <td>{trip.mobileNo}</td>
                                                <td>{trip.amount}</td>
                                                <td>{trip.distance}</td>
                                                <td>
                                                    <button className="btn btn-primary m-1" onClick={() => handleAcceptTrip(trip.id,trip.mobileNo)}> Accept </button>
                                                </td>
                                            </tr>

                                        </>
                                    )
                                })
                            }

                        </tbody>

                    </table>
                </div>

            </>
    )

}

export default DriverHome;