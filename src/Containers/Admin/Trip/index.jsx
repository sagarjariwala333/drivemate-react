import React, { useEffect, useState } from "react";
import Header from "../../Header";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTripsRequest } from "../../../redux/viewtrips/actions";
import { Link } from "react-router-dom";
import { getAllTrips } from "../../../services/dpservices";

function Trips() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTripsRequest());
  }, []);

  const res = useSelector((state) => state.ViewTrip);
  console.log(res);

  return (
    <>
    {res?.loading ? <>Loading...</>:
      <div className="p-5">
        {/* <table
          id="Admin"
          class="table table-striped table-bordered table-sm"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th className="th-sm">Driver</th>
              <th className="th-sm">Customer</th>
              <th className="th-sm">Source</th>
              <th className="th-sm">Destination</th>

              <th className="th-sm"> Distance</th>

              <th className="th-sm"> Date</th>
            </tr>
          </thead>
          <tbody>
            {res.data?.map((x) => (
              <tr>
                <td>{x.driverName}</td>
                <td>{x.customerName}</td>
                <td>{x.source}</td>
                <td>{x.destination}</td>
                <td>{x.distance}</td>
                <td>{new Date(x.date).getDate()}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <div className="d-flex flex-row flex-nowrap">
        {res?.data?.map((x) => {
          return <>
          <div className="card m-5" style={{ width: "18rem" }}>
            <div className="card-body">
              <p>Driver Name: {x.driverName}</p>
              <p>Customer Name: {x.customerName}</p>
              <p>Source: {x.source}</p>
              <p>Destination: {x.destination}</p>
              <p>Distance: {x.distance}</p>
              <p>Date: {new Date(x.date).getDate() +"/"+new Date(x.date).getMonth()+"/"+new Date(x.date).getFullYear()}</p>
            </div>
          </div>
          </>
        })}
        </div>
      </div>}
    </>
  );
}

export default Trips;
