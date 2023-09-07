import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../../Loading";
import { viewBookedTripRequest } from "../../../redux/viewbookedtrips/actions";

const BookedTrips = () => {

    const dispatch = useDispatch();

    const viewBookedTrip = useSelector(state => state.ViewBookedTrip)

    useEffect(() => {
        dispatch(viewBookedTripRequest());
    }, [])

    return (
        (viewBookedTrip.loading) ? <LoadingPage /> :
            <>
                <div className="p-5">
                    <table id="Admin" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <tr>

                                <th className="th-sm">
                                    Driver Name
                                </th>

                                <th className="th-sm">
                                    Mobile No
                                </th>


                                <th className="th-sm">
                                    Source
                                </th>

                                <th className="th-sm">Destination
                                </th>

                                <th className="th-sm">OTP
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                viewBookedTrip?.data?.map(trip => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{trip.driverName}</td>
                                                <td>{trip.mobileNo}</td>
                                                <td>{trip.source}</td>
                                                <td>{trip.destination}</td>
                                                <td>{trip.otp}</td>
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

export default BookedTrips;