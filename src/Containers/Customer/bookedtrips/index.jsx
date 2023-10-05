import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../../Loading";
import { bookedTripRequest } from "../../../redux/viewbookedtrips/actions";
//import { viewBookedTripRequest } from "../../../redux/viewcustomerbookedtrips/actions";

const BookedTrips = () => {

    const dispatch = useDispatch();

    const viewBookedTrip = useSelector(state => state.ViewBookedTrips)

    function callApi()
    {
        dispatch(bookedTripRequest())   
    }

    useEffect(() => {
        const interval = setInterval(() => {
            callApi();
        }, 5000);
    
        return () => clearInterval(interval);
      }, []); 

    useEffect(() => {
        dispatch(bookedTripRequest())
    }, [dispatch])



    return (
        (viewBookedTrip?.loading) ? <LoadingPage /> :
            <>
                <div className="p-5">
                    <table id="Admin" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <tr>



                                <th className="th-sm">
                                    Source
                                </th>

                                <th className="th-sm">Destination
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                viewBookedTrip?.data?.map(trip => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{trip.source}</td>
                                                <td>{trip.destination}</td>
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