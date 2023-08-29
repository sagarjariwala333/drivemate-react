import React, { useEffect, useState } from "react";
import Header from "../../Header";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchDriverRequest } from '../../../redux/viewdriver/actions';
import { remainTripRequest } from "../../../redux/viewremaintrip/actions";
import LoadingPage from '../../Loading';

function DriverHome() {

    const dispatch = useDispatch();

    const {res, viewRemainTrip} = useSelector(
        state => state.ViewDriver,
        state => state.ViewRemainTrip
        );

    useEffect(() => {
        dispatch(remainTripRequest(null));
    }, [])


    console.log(res);

    return (
        (viewRemainTrip?.loading) ? <LoadingPage/> :
        <>
            <div className="p-5">

                <div class="container p-5">
                    <div class="row">
                        <div class="col">
                            <h1>
                            Trips: 20
                            </h1>
                        </div>
                        <div class="col">
                            <h1>Customers: 15</h1>
                        </div>
                        <div class="col">
                            <h1>Earning: 2000</h1>
                        </div>
                    </div>
                </div>

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

                            <th className="th-sm"> Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>John Doe</td>
                            <td>New York</td>
                            <td>Los Angeles</td>
                            <td>123-456-7890</td>
                            <td>
                                <button className="btn btn-primary m-1"> Accept </button>
                                <button className="btn btn-danger m-1"> Reject </button>
                            </td>
                        </tr>

                        <tr>
                            <td>Alice Johnson</td>
                            <td>Chicago</td>
                            <td>Miami</td>
                            <td>987-654-3210</td>
                            <td>
                                <button className="btn btn-primary m-1"> Accept </button>
                                <button className="btn btn-danger m-1"> Reject </button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    )

}

export default DriverHome;